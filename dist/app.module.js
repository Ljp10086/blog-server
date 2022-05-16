"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const github_sso_module_1 = require("./modules/github-sso/github-sso.module");
const redis_module_1 = require("./redis/redis.module");
const mongoose_1 = require("@nestjs/mongoose");
const blog_module_1 = require("./modules/blog/blog.module");
const tag_module_1 = require("./modules/tag/tag.module");
const category_module_1 = require("./modules/category/category.module");
const comment_module_1 = require("./modules/comment/comment.module");
const admin_module_1 = require("./modules/admin/admin.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGOOSE_URL),
            github_sso_module_1.GithubSsoModule,
            redis_module_1.RedisModule,
            blog_module_1.BlogModule,
            tag_module_1.TagModule,
            category_module_1.CategoryModule,
            comment_module_1.CommentModule,
            admin_module_1.AdminModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map