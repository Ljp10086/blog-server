import { HttpService } from '@nestjs/common';
import { GithubSSOType } from '../../types';
import { RedisService } from 'src/redis/redis.service';
import { Response } from 'express';
import { UserInterface } from 'src/db/interfaces/user.interface';
import { Model } from 'mongoose';
import { UserDto } from 'src/db/dtos/user.dto';
export declare class GithubSsoService {
    private readonly userModel;
    private readonly httpService;
    private readonly redisService;
    private ssoAddr;
    constructor(userModel: Model<UserInterface>, httpService: HttpService, redisService: RedisService);
    login(referer: string): Promise<{
        url: string;
    }>;
    callback(response: Response, params: GithubSSOType.ICallback): Promise<any>;
    getUserInfo(cookie: string): Promise<UserDto>;
    getAccessToken({ code, }: GithubSSOType.ICallback): Promise<GithubSSOType.ITokenRes>;
}
