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
exports.RoleGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const role_enum_1 = require("../enums/role.enum");
const roles_decorator_1 = require("../decorators/roles.decorator");
const types_1 = require("../types");
const mongoose_1 = require("mongoose");
const user_interface_1 = require("../db/interfaces/user.interface");
const mongoose_2 = require("@nestjs/mongoose");
let RoleGuard = class RoleGuard {
    constructor(httpService, userModel, reflector) {
        this.httpService = httpService;
        this.userModel = userModel;
        this.reflector = reflector;
    }
    async canActivate(context) {
        var _a;
        const req = context.switchToHttp().getRequest();
        const role = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        console.log(role);
        const accessTokenObj = JSON.parse(req['accessTokenObj']);
        const userInfo = await this.getUserInfo(accessTokenObj);
        const user = await this.userModel.findOne({ userId: userInfo.id });
        if ((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : 0 === role[0]) {
            throw new common_1.ForbiddenException('您没有权限做此操作');
        }
        console.log('user', user);
        return true;
    }
    async getUserInfo(accessTokenObj) {
        const res = await this.httpService
            .get(process.env.AUTH_USER_INFO, {
            headers: {
                Authorization: `token ${accessTokenObj.access_token}`,
            },
        })
            .toPromise();
        return res.data;
    }
};
RoleGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_2.InjectModel)('user')),
    __metadata("design:paramtypes", [common_1.HttpService,
        mongoose_1.Model,
        core_1.Reflector])
], RoleGuard);
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map