import { Request, Response } from 'express';
import { GithubSSOType } from 'src/types';
import { GithubSsoService } from './github-sso.service';
import { UserDto } from 'src/db/dtos/user.dto';
export declare class GithubSsoController {
    private readonly githubSSOController;
    constructor(githubSSOController: GithubSsoService);
    login(referer: string): Promise<any>;
    callback(res: Response, params: GithubSSOType.ICallback): Promise<any>;
    getUserInfo(req: Request): Promise<UserDto>;
}
