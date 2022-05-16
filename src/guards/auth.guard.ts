import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { RedisService } from '../redis/redis.service';
import { ReqWithAccessToken } from '../types/github-sso.type';

@Injectable()
export class GithubAuthGuard implements CanActivate {
  constructor(private readonly redisService: RedisService) {}
  // 权限校验
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    return this.validateCookies(req);
  }

  protected async validateCookies(req: Request): Promise<boolean> {
    const cookieObj = req.signedCookies;
    const githubAuthCookie = cookieObj[process.env.COOKIE_NAME];
    if (!githubAuthCookie) {
      throw new UnauthorizedException('请先登录');
    }

    return this.checkAuth(githubAuthCookie, req);
  }

  private async checkAuth(cookie: string, req: Request): Promise<boolean> {
    const accessTokenObj = await this.redisService.get(cookie);
    if (!accessTokenObj) {
      throw new UnauthorizedException('请先登录');
    }
    (req as ReqWithAccessToken).accessTokenObj = accessTokenObj;
    return true;
  }
}
