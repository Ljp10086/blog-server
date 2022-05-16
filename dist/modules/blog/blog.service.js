"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const blog_dto_1 = require("../../db/dtos/blog.dto");
const blog_interface_1 = require("../../db/interfaces/blog.interface");
const fs = require("fs");
const path_1 = require("path");
const page_dto_1 = require("../../db/dtos/page.dto");
const blog_like_interface_1 = require("../../db/interfaces/blog-like.interface");
const blog_like_dto_1 = require("../../db/dtos/blog-like.dto");
const like_enum_1 = require("../../enums/like.enum");
const redis_service_1 = require("../../redis/redis.service");
let BlogService = class BlogService {
    constructor(blogModel, blogLikeModel, redisService) {
        this.blogModel = blogModel;
        this.blogLikeModel = blogLikeModel;
        this.redisService = redisService;
    }
    async getUserInfoFromCookie(req) {
        const cookieObj = req.signedCookies;
        const githubAuthCookie = cookieObj[process.env.COOKIE_NAME];
        const accessTokenStr = await this.redisService.getUserInfo(githubAuthCookie);
        return accessTokenStr ? JSON.parse(accessTokenStr) : null;
    }
    async injectIsUserLikeToModel(blogs, req) {
        const userInfo = await this.getUserInfoFromCookie(req);
        if (userInfo) {
            const likes = await this.blogLikeModel.find({
                isDeleted: false,
                isLike: like_enum_1.default.Like,
                userId: userInfo._id,
                blogId: { $in: blogs.map((blog) => blog._id) },
            });
            console.log(likes);
            blogs.forEach((blog) => {
                var _a;
                blog._doc.isUserLike =
                    ((_a = likes.find((like) => like.blogId.toString() === blog._id.toString())) === null || _a === void 0 ? void 0 : _a.isLike) === like_enum_1.default.Like;
            });
        }
        else {
            blogs.forEach((blog) => {
                blog._doc.isUserLike = false;
            });
        }
    }
    async getBlogsByPage(body, req) {
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
    async getBlogById(id) {
        return this.blogModel.findOne({ _id: id, isDeleted: false });
    }
    async create(blogDto) {
        await this.blogModel.create(blogDto);
        return true;
    }
    async update(blogDto) {
        await this.blogModel.updateOne({ _id: blogDto._id }, blogDto);
        return true;
    }
    async delete(id) {
        await this.blogModel.updateOne({ _id: id }, { isDeleted: true });
        return true;
    }
    async uploadCoverImg(file) {
        const url = path_1.default.join('/public/');
        fs.writeFileSync(url, file);
    }
    async changeBlogLike(blogLikeDto) {
        const { blogId, userId, isLike } = blogLikeDto;
        const blog = await this.blogModel.findOne({
            _id: blogId,
            isDeleted: false,
        });
        if (!blog) {
            throw new common_1.BadRequestException('博客不存在');
        }
        const blogLike = await this.blogLikeModel.findOne({
            blogId,
            userId,
            isDeleted: false,
        });
        if (blogLike && blogLike.isLike === blogLikeDto.isLike) {
            return true;
        }
        console.log(blogLike);
        if (blogLike) {
            await this.blogLikeModel.updateOne({ _id: blogLike._id }, { isLike: blogLikeDto.isLike });
        }
        else {
            console.log('blogLikeDto', blogLikeDto);
            await this.blogLikeModel.create(Object.assign(Object.assign({}, blogLikeDto), { userId: blogLikeDto.userId }));
        }
        await this.blogModel.updateOne({ _id: blogId }, { $inc: { likeCount: blogLikeDto.isLike === like_enum_1.default.Dislike ? -1 : 1 } });
        return true;
    }
    async upVisit(blogId) {
        await this.blogModel.updateOne({ _id: blogId, isDeleted: false }, { $inc: { visitAllNumber: 1 } });
        return true;
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('blog')),
    __param(1, (0, mongoose_1.InjectModel)('blogLikes')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        redis_service_1.RedisService])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map