import { CanActivate, ExecutionContext, HttpService } from '@nestjs/common';
import { GithubUserInfo } from '../types/github-sso.type';
import { Reflector } from '@nestjs/core';
import { GithubSSOType } from 'src/types';
import { Model } from 'mongoose';
import { UserInterface } from 'src/db/interfaces/user.interface';
export declare class RoleGuard implements CanActivate {
    private readonly httpService;
    private readonly userModel;
    private reflector;
    constructor(httpService: HttpService, userModel: Model<UserInterface>, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
    getUserInfo(accessTokenObj: GithubSSOType.ITokenRes): Promise<GithubUserInfo>;
}
