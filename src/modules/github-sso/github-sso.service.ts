import { HttpService, Injectable, UnauthorizedException } from '@nestjs/common';
import { GithubSSOType } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { RedisService } from 'src/redis/redis.service';
import { Response } from 'express';
import { UserInterface } from 'src/db/interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/db/dtos/user.dto';
import { GithubUserInfo } from '../../types/github-sso.type';
import { COOKIE_EXPIRE } from 'src/utils/vars';
import { logger } from 'src/middlewares/log.middleware';

@Injectable()
export class GithubSsoService {
  private ssoAddr = {
    login: process.env.AUTH_LOGIN_ADDR,
    accessToken: process.env.AUTH_ACCESS_TOKEN,
    userInfo: process.env.AUTH_USER_INFO,
  };

  constructor(
    @InjectModel('user')
    private readonly userModel: Model<UserInterface>,
    private readonly httpService: HttpService,
    private readonly redisService: RedisService,
  ) {}

  async login(referer: string): Promise<{ url: string }> {
    const state = uuidv4();
    const { CLIENT_ID, REDIRECT_URI, ALLOW_SIGNUP } = process.env;
    const params = {
      state,
      allow_signup: ALLOW_SIGNUP,
      client_id: CLIENT_ID,
      redirect_uri: encodeURIComponent(REDIRECT_URI),
    };
    const queryStr = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');
    await this.redisService.set(state, referer);
    return { url: `${this.ssoAddr.login}?${queryStr}` };
  }

  async callback(
    response: Response,
    params: GithubSSOType.ICallback,
  ): Promise<any> {
    const { COOKIE_NAME, SIGNED, HTTP_ONLY } = process.env;
    const referer = await this.redisService.get(params.state);
    await this.redisService.del(params.state);
    const accessTokenObject = await this.getAccessToken(params);
    const cookieValue = uuidv4();
    // * 将token存入redis
    await this.redisService.setEx(
      cookieValue,
      JSON.stringify(accessTokenObject),
      COOKIE_EXPIRE,
    );

    return response
      .status(302)
      .location(referer)
      .cookie(COOKIE_NAME, cookieValue, {
        maxAge: COOKIE_EXPIRE * 1000,
        signed: Boolean(SIGNED),
        httpOnly: Boolean(HTTP_ONLY),
        path: '/',
        // secure: Boolean(SECURE),
        // domain?: string | undefined;
        // sameSite?: boolean | 'lax' | 'strict' | 'none' | undefined;
      })
      .send();
  }

  async getUserInfo(cookie: string): Promise<UserDto> {
    const cachedUserInfo = await this.redisService.getUserInfo(cookie);

    if (cachedUserInfo) {
      return JSON.parse(cachedUserInfo);
    }
    const accessTokenStr = await this.redisService.get(cookie);
    if (!accessTokenStr) {
      throw new UnauthorizedException('请先登录！');
    }

    const accessTokenObj = JSON.parse(
      accessTokenStr,
    ) as GithubSSOType.ITokenRes;
    // console.log(accessTokenObj);
    try {
      const res = await this.httpService
        .get<GithubUserInfo>(process.env.AUTH_USER_INFO, {
          headers: {
            Authorization: `token ${accessTokenObj.access_token}`,
          },
        })
        .toPromise();
      const { data } = res;
      const { id: userId, login, name, email, avatar_url: avatarUrl } = data;
      console.log(data);
      const userAdapter: UserDto = {
        userId,
        login,
        name: name ?? login,
        email,
        avatarUrl,
      };
      const userInfoFromDb = await this.userModel.findOne({ userId });
      if (!userInfoFromDb) {
        await this.userModel.create(userAdapter);
      } else {
        await this.userModel.updateOne({ userId }, userAdapter);
      }
      const userInfo = await this.userModel.findOne({ userId });
      await this.redisService.setUserInfo(cookie, userInfo);
      return userInfo;
    } catch (error) {
      logger.error(error);
      throw new UnauthorizedException('请先登录！');
    }
  }

  // * --------- 通用方法 ---------
  // * 获取token
  async getAccessToken({
    code,
  }: GithubSSOType.ICallback): Promise<GithubSSOType.ITokenRes> {
    const { CLIENT_ID, CLIENT_SECRETS } = process.env;

    const data = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRETS,
      code,
    };
    const res = await this.httpService
      .post(this.ssoAddr.accessToken, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .toPromise();
    return res.data;
  }
}
