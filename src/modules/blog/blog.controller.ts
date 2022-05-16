import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { BlogLikeDto } from 'src/db/dtos/blog-like.dto';
import { BlogDto } from 'src/db/dtos/blog.dto';
import { PageDto } from 'src/db/dtos/page.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { GithubAuthGuard } from 'src/guards/auth.guard';
import { RoleGuard } from 'src/guards/role.guard';
import { Common } from 'src/types';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('getBlogsByPage')
  async getBlogsByPage(@Body() body: PageDto, @Req() req: Request) {
    return this.blogService.getBlogsByPage(body, req);
  }

  @Get('getBlogById/:id')
  async getBlogById(@Param('id') id: string) {
    return this.blogService.getBlogById(id);
  }

  @Roles(Role.Administrators)
  @UseGuards(GithubAuthGuard, RoleGuard)
  @Post('create')
  async create(@Body() blogDto: BlogDto) {
    return this.blogService.create(blogDto);
  }

  @Roles(Role.Administrators)
  @UseGuards(GithubAuthGuard, RoleGuard)
  @Post('update')
  async update(@Body() blogDto: BlogDto) {
    return this.blogService.update(blogDto);
  }

  @Roles(Role.Administrators)
  @UseGuards(GithubAuthGuard, RoleGuard)
  @Delete('delete/:id')
  async delete(@Param() { id }: Common.DeleteParamType) {
    return this.blogService.delete(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadCoverImg(@UploadedFile() file) {
    return this.blogService.uploadCoverImg(file);
  }

  // * 浏览量
  @Post('visit')
  upVisit(@Body() { blogId }: { blogId: string }) {
    return this.blogService.upVisit(blogId);
  }

  // * 博客点赞
  @UseGuards(GithubAuthGuard)
  @Post('like')
  async changeBlogLike(@Body() blogLikeDto: BlogLikeDto) {
    console.log(blogLikeDto);
    return this.blogService.changeBlogLike(blogLikeDto);
  }
}
