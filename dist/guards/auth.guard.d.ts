import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { RedisService } from '../redis/redis.service';
export declare class GithubAuthGuard implements CanActivate {
    private readonly redisService;
    constructor(redisService: RedisService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    protected validateCookies(req: Request): Promise<boolean>;
    private checkAuth;
}
