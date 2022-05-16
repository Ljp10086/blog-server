import { Model } from 'mongoose';
import { BlogDto } from 'src/db/dtos/blog.dto';
import { BlogInterface } from 'src/db/interfaces/blog.interface';
import { PageDto } from 'src/db/dtos/page.dto';
import { BlogLikeInterface } from 'src/db/interfaces/blog-like.interface';
import { BlogLikeDto } from 'src/db/dtos/blog-like.dto';
import { Request } from 'express';
import { RedisService } from 'src/redis/redis.service';
export declare class BlogService {
    private readonly blogModel;
    private readonly blogLikeModel;
    private readonly redisService;
    constructor(blogModel: Model<BlogInterface>, blogLikeModel: Model<BlogLikeInterface>, redisService: RedisService);
    getUserInfoFromCookie(req: Request): Promise<any>;
    injectIsUserLikeToModel(blogs: any, req: any): Promise<void>;
    getBlogsByPage(body: PageDto, req: Request): Promise<{
        list: BlogInterface[];
        total: number;
    }>;
    getBlogById(id: string): Promise<BlogInterface>;
    create(blogDto: BlogDto): Promise<boolean>;
    update(blogDto: BlogDto): Promise<boolean>;
    delete(id: string): Promise<boolean>;
    uploadCoverImg(file: any): Promise<void>;
    changeBlogLike(blogLikeDto: BlogLikeDto): Promise<boolean>;
    upVisit(blogId: string): Promise<boolean>;
}
