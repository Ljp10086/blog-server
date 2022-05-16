"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModule = void 0;
const common_1 = require("@nestjs/common");
const blog_service_1 = require("./blog.service");
const blog_controller_1 = require("./blog.controller");
const mongoose_1 = require("@nestjs/mongoose");
const blog_schema_1 = require("../../db/schemas/blog.schema");
const user_schema_1 = require("../../db/schemas/user.schema");
const blog_like_schema_1 = require("../../db/schemas/blog-like.schema");
let BlogModule = class BlogModule {
};
BlogModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'user',
                    schema: user_schema_1.UserSchema,
                },
            ]),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'blogLikes',
                    schema: blog_like_schema_1.BlogLikeSchema,
                },
            ]),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'blog',
                    schema: blog_schema_1.BlogSchema,
                },
            ]),
            common_1.HttpModule,
        ],
        providers: [blog_service_1.BlogService],
        controllers: [blog_controller_1.BlogController],
    })
], BlogModule);
exports.BlogModule = BlogModule;
//# sourceMappingURL=blog.module.js.map