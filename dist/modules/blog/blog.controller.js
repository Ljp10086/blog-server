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
exports.BlogController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const blog_like_dto_1 = require("../../db/dtos/blog-like.dto");
const blog_dto_1 = require("../../db/dtos/blog.dto");
const page_dto_1 = require("../../db/dtos/page.dto");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const role_enum_1 = require("../../enums/role.enum");
const auth_guard_1 = require("../../guards/auth.guard");
const role_guard_1 = require("../../guards/role.guard");
const types_1 = require("../../types");
const blog_service_1 = require("./blog.service");
let BlogController = class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }
    async getBlogsByPage(body, req) {
        return this.blogService.getBlogsByPage(body, req);
    }
    async getBlogById(id) {
        return this.blogService.getBlogById(id);
    }
    async create(blogDto) {
        return this.blogService.create(blogDto);
    }
    async update(blogDto) {
        return this.blogService.update(blogDto);
    }
    async delete({ id }) {
        return this.blogService.delete(id);
    }
    uploadCoverImg(file) {
        return this.blogService.uploadCoverImg(file);
    }
    upVisit({ blogId }) {
        return this.blogService.upVisit(blogId);
    }
    async changeBlogLike(blogLikeDto) {
        console.log(blogLikeDto);
        return this.blogService.changeBlogLike(blogLikeDto);
    }
};
__decorate([
    (0, common_1.Post)('getBlogsByPage'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_dto_1.PageDto, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogsByPage", null);
__decorate([
    (0, common_1.Get)('getBlogById/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogById", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Administrators),
    (0, common_1.UseGuards)(auth_guard_1.GithubAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Post)('create'),
    openapi.ApiResponse({ status: 201, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blog_dto_1.BlogDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Administrators),
    (0, common_1.UseGuards)(auth_guard_1.GithubAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Post)('update'),
    openapi.ApiResponse({ status: 201, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blog_dto_1.BlogDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Administrators),
    (0, common_1.UseGuards)(auth_guard_1.GithubAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Delete)('delete/:id'),
    openapi.ApiResponse({ status: 200, type: Boolean }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.Common.DeleteParamType]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "uploadCoverImg", null);
__decorate([
    (0, common_1.Post)('visit'),
    openapi.ApiResponse({ status: 201, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "upVisit", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.GithubAuthGuard),
    (0, common_1.Post)('like'),
    openapi.ApiResponse({ status: 201, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blog_like_dto_1.BlogLikeDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "changeBlogLike", null);
BlogController = __decorate([
    (0, common_1.Controller)('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map