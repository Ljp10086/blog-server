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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const redis_service_1 = require("../redis/redis.service");
let GithubAuthGuard = class GithubAuthGuard {
    constructor(redisService) {
        this.redisService = redisService;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        return this.validateCookies(req);
    }
    async validateCookies(req) {
        const cookieObj = req.signedCookies;
        const githubAuthCookie = cookieObj[process.env.COOKIE_NAME];
        if (!githubAuthCookie) {
            throw new common_1.UnauthorizedException('请先登录');
        }
        return this.checkAuth(githubAuthCookie, req);
    }
    async checkAuth(cookie, req) {
        const accessTokenObj = await this.redisService.get(cookie);
        if (!accessTokenObj) {
            throw new common_1.UnauthorizedException('请先登录');
        }
        req.accessTokenObj = accessTokenObj;
        return true;
    }
};
GithubAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_service_1.RedisService])
], GithubAuthGuard);
exports.GithubAuthGuard = GithubAuthGuard;
//# sourceMappingURL=auth.guard.js.map