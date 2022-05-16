import {
  Controller,
  Get,
  Headers,
  Query,
  Redirect,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { GithubAuthGuard } from '../../guards/auth.guard';
import { GithubSSOType } from 'src/types';
import { GithubSsoService } from './github-sso.service';
import { UserDto } from 'src/db/dtos/user.dto';
import { Role } from 'src/enums/role.enum';
import { RoleGuard } from 'src/guards/role.guard';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('github-sso')
export class GithubSsoController {
  constructor(private readonly githubSSOController: GithubSsoService) {}

  @Get('login')
  @Redirect()
  login(@Headers('referer') referer: string): Promise<any> {
    console.log('referer', referer);
    return this.githubSSOController.login(referer);
  }

  @Get('callback')
  callback(
    @Res() res: Response,
    @Query() params: GithubSSOType.ICallback,
  ): Promise<any> {
    return this.githubSSOController.callback(res, params);
  }

  @UseGuards(GithubAuthGuard)
  @Get('getUserInfo')
  getUserInfo(@Req() req: Request): Promise<UserDto> {
    const cookie = req.signedCookies[process.env.COOKIE_NAME];
    return this.githubSSOController.getUserInfo(cookie);
  }
}
