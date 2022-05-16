import { Request } from 'express';
import { BlogLikeDto } from 'src/db/dtos/blog-like.dto';
import { BlogDto } from 'src/db/dtos/blog.dto';
import { PageDto } from 'src/db/dtos/page.dto';
import { Common } from 'src/types';
import { BlogService } from './blog.service';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    getBlogsByPage(body: PageDto, req: Request): Promise<{
        list: import("../../db/interfaces/blog.interface").BlogInterface[];
        total: number;
    }>;
    getBlogById(id: string): Promise<import("../../db/interfaces/blog.interface").BlogInterface>;
    create(blogDto: BlogDto): Promise<boolean>;
    update(blogDto: BlogDto): Promise<boolean>;
    delete({ id }: Common.DeleteParamType): Promise<boolean>;
    uploadCoverImg(file: any): Promise<void>;
    upVisit({ blogId }: {
        blogId: string;
    }): Promise<boolean>;
    changeBlogLike(blogLikeDto: BlogLikeDto): Promise<boolean>;
}
