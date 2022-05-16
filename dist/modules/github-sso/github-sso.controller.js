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
exports.GithubSsoController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../guards/auth.guard");
const types_1 = require("../../types");
const github_sso_service_1 = require("./github-sso.service");
const user_dto_1 = require("../../db/dtos/user.dto");
const role_enum_1 = require("../../enums/role.enum");
const role_guard_1 = require("../../guards/role.guard");
const roles_decorator_1 = require("../../decorators/roles.decorator");
let GithubSsoController = class GithubSsoController {
    constructor(githubSSOController) {
        this.githubSSOController = githubSSOController;
    }
    login(referer) {
        console.log('referer', referer);
        return this.githubSSOController.login(referer);
    }
    callback(res, params) {
        return this.githubSSOController.callback(res, params);
    }
    getUserInfo(req) {
        const cookie = req.signedCookies[process.env.COOKIE_NAME];
        return this.githubSSOController.getUserInfo(cookie);
    }
};
__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.Redirect)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Headers)('referer')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GithubSsoController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('callback'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GithubSsoController.prototype, "callback", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.GithubAuthGuard),
    (0, common_1.Get)('getUserInfo'),
    openapi.ApiResponse({ status: 200, type: require("../../db/dtos/user.dto").UserDto }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GithubSsoController.prototype, "getUserInfo", null);
GithubSsoController = __decorate([
    (0, common_1.Controller)('github-sso'),
    __metadata("design:paramtypes", [github_sso_service_1.GithubSsoService])
], GithubSsoController);
exports.GithubSsoController = GithubSsoController;
//# sourceMappingURL=github-sso.controller.js.map