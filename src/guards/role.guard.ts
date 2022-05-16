import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  HttpService,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { RedisService } from '../redis/redis.service';
import { GithubUserInfo, ReqWithAccessToken } from '../types/github-sso.type';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/enums/role.enum';
import { ROLES_KEY } from 'src/decorators/roles.decorator';
import { GithubSSOType } from 'src/types';
import { Model } from 'mongoose';
import { UserInterface } from 'src/db/interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel('user')
    private readonly userModel: Model<UserInterface>,
    private reflector: Reflector,
  ) {}
  // 权限校验
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const role = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log(role);
    const accessTokenObj: GithubSSOType.ITokenRes = JSON.parse(
      req['accessTokenObj'],
    );
    const userInfo = await this.getUserInfo(accessTokenObj);
    const user = await this.userModel.findOne({ userId: userInfo.id });
    if (user?.role ?? 0 === role[0]) {
      throw new ForbiddenException('您没有权限做此操作');
    }
    console.log('user', user);
    return true;
  }

  async getUserInfo(accessTokenObj: GithubSSOType.ITokenRes) {
    const res = await this.httpService
      .get<GithubUserInfo>(process.env.AUTH_USER_INFO, {
        headers: {
          Authorization: `token ${accessTokenObj.access_token}`,
        },
      })
      .toPromise();

    return res.data;
  }
}
