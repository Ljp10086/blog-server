import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogDto } from 'src/db/dtos/blog.dto';
import { BlogInterface } from 'src/db/interfaces/blog.interface';
import * as fs from 'fs';
import path from 'path';
import { PageDto } from 'src/db/dtos/page.dto';
import { BlogLikeInterface } from 'src/db/interfaces/blog-like.interface';
import { BlogLikeDto } from 'src/db/dtos/blog-like.dto';
import Like from 'src/enums/like.enum';
import { Request } from 'express';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel('blog')
    private readonly blogModel: Model<BlogInterface>,
    @InjectModel('blogLikes')
    private readonly blogLikeModel: Model<BlogLikeInterface>,
    private readonly redisService: RedisService,
  ) {}

  async getUserInfoFromCookie(req: Request) {
    const cookieObj = req.signedCookies;
    const githubAuthCookie = cookieObj[process.env.COOKIE_NAME];
    const accessTokenStr = await this.redisService.getUserInfo(
      githubAuthCookie,
    );
    return accessTokenStr ? JSON.parse(accessTokenStr) : null;
  }

  async injectIsUserLikeToModel(blogs, req) {
    const userInfo = await this.getUserInfoFromCookie(req);
    if (userInfo) {
      const likes = await this.blogLikeModel.find({
        isDeleted: false,
        isLike: Like.Like,
        userId: userInfo._id,
        blogId: { $in: blogs.map((blog) => blog._id) },
      });
      blogs.forEach((blog) => {
        (blog as any)._doc.isUserLike =
          likes.find((like) => like.blogId.toString() === blog._id.toString())
            ?.isLike === Like.Like;
      });
    } else {
      blogs.forEach((blog) => {
        blog._doc.isUserLike = false;
      });
    }
  }

  async getBlogsByPage(body: PageDto, req: Request) {
    const { pageSize, pageNum } = body;

    const blogs = await this.blogModel
      .find({ isDeleted: false })
      .sort({ _id: -1 })
      .skip((pageNum - 1) * pageSize)
      .limit(pageSize)
      .exec();
    const total = await this.blogModel.countDocuments({ isDeleted: false });
    await this.injectIsUserLikeToModel(blogs, req);
    return { list: blogs, total };
  }

  async getBlogById(id: string) {
    return this.blogModel.findOne({ _id: id, isDeleted: false });
  }

  async create(blogDto: BlogDto) {
    await this.blogModel.create(blogDto);
    return true;
  }

  async update(blogDto: BlogDto) {
    await this.blogModel.updateOne({ _id: blogDto._id }, blogDto);
    return true;
  }

  async delete(id: string) {
    await this.blogModel.updateOne({ _id: id }, { isDeleted: true });
    return true;
  }

  async uploadCoverImg(file: any) {
    const url = path.join('/public/');
    fs.writeFileSync(url, file);
  }

  // * 点赞
  async changeBlogLike(blogLikeDto: BlogLikeDto) {
    const { blogId, userId, isLike } = blogLikeDto;
    const blog = await this.blogModel.findOne({
      _id: blogId,
      isDeleted: false,
    });
    if (!blog) {
      throw new BadRequestException('博客不存在');
    }
    const blogLike = await this.blogLikeModel.findOne({
      blogId,
      userId,
      isDeleted: false,
    });

    if (blogLike && blogLike.isLike === blogLikeDto.isLike) {
      return true;
    }
    if (blogLike) {
      await this.blogLikeModel.updateOne(
        { _id: blogLike._id },
        { isLike: blogLikeDto.isLike },
      );
    } else {
      console.log('blogLikeDto', blogLikeDto);
      await this.blogLikeModel.create({
        ...blogLikeDto,
        userId: blogLikeDto.userId,
      });
    }
    await this.blogModel.updateOne(
      { _id: blogId },
      { $inc: { likeCount: blogLikeDto.isLike === Like.Dislike ? -1 : 1 } },
    );
    return true;
  }

  async upVisit(blogId: string) {
    await this.blogModel.updateOne(
      { _id: blogId, isDeleted: false },
      { $inc: { visitAllNumber: 1 } },
    );
    return true;
  }
}
