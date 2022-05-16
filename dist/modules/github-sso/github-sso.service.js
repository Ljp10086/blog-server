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
exports.GithubSsoService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const redis_service_1 = require("../../redis/redis.service");
const user_interface_1 = require("../../db/interfaces/user.interface");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_dto_1 = require("../../db/dtos/user.dto");
const vars_1 = require("../../utils/vars");
const log_middleware_1 = require("../../middlewares/log.middleware");
let GithubSsoService = class GithubSsoService {
    constructor(userModel, httpService, redisService) {
        this.userModel = userModel;
        this.httpService = httpService;
        this.redisService = redisService;
        this.ssoAddr = {
            login: process.env.AUTH_LOGIN_ADDR,
            accessToken: process.env.AUTH_ACCESS_TOKEN,
            userInfo: process.env.AUTH_USER_INFO,
        };
    }
    async login(referer) {
        const state = (0, uuid_1.v4)();
        const { CLIENT_ID, REDIRECT_URI, ALLOW_SIGNUP } = process.env;
        const params = {
            state,
            allow_signup: ALLOW_SIGNUP,
            client_id: CLIENT_ID,
            redirect_uri: encodeURIComponent(REDIRECT_URI),
        };
        const queryStr = Object.keys(params)
            .map((key) => `${key}=${params[key]}`)
            .join('&');
        await this.redisService.set(state, referer);
        return { url: `${this.ssoAddr.login}?${queryStr}` };
    }
    async callback(response, params) {
        const { COOKIE_NAME, SIGNED, HTTP_ONLY } = process.env;
        const referer = await this.redisService.get(params.state);
        await this.redisService.del(params.state);
        const accessTokenObject = await this.getAccessToken(params);
        const cookieValue = (0, uuid_1.v4)();
        await this.redisService.setEx(cookieValue, JSON.stringify(accessTokenObject), vars_1.COOKIE_EXPIRE);
        return response
            .status(302)
            .location(referer)
            .cookie(COOKIE_NAME, cookieValue, {
            maxAge: vars_1.COOKIE_EXPIRE * 1000,
            signed: Boolean(SIGNED),
            httpOnly: Boolean(HTTP_ONLY),
            path: '/',
        })
            .send();
    }
    async getUserInfo(cookie) {
        const cachedUserInfo = await this.redisService.getUserInfo(cookie);
        if (cachedUserInfo) {
            return JSON.parse(cachedUserInfo);
        }
        const accessTokenStr = await this.redisService.get(cookie);
        if (!accessTokenStr) {
            throw new common_1.UnauthorizedException('请先登录！');
        }
        const accessTokenObj = JSON.parse(accessTokenStr);
        try {
            const res = await this.httpService
                .get(process.env.AUTH_USER_INFO, {
                headers: {
                    Authorization: `token ${accessTokenObj.access_token}`,
                },
            })
                .toPromise();
            const { data } = res;
            const { id: userId, login, name, email, avatar_url: avatarUrl } = data;
            console.log(data);
            const userAdapter = {
                userId,
                login,
                name: name !== null && name !== void 0 ? name : login,
                email,
                avatarUrl,
            };
            const userInfoFromDb = await this.userModel.findOne({ userId });
            if (!userInfoFromDb) {
                await this.userModel.create(userAdapter);
            }
            else {
                await this.userModel.updateOne({ userId }, userAdapter);
            }
            const userInfo = await this.userModel.findOne({ userId });
            await this.redisService.setUserInfo(cookie, userInfo);
            return userInfo;
        }
        catch (error) {
            log_middleware_1.logger.error(error);
            throw new common_1.UnauthorizedException('请先登录！');
        }
    }
    async getAccessToken({ code, }) {
        const { CLIENT_ID, CLIENT_SECRETS } = process.env;
        const data = {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRETS,
            code,
        };
        const res = await this.httpService
            .post(this.ssoAddr.accessToken, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .toPromise();
        return res.data;
    }
};
GithubSsoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('user')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        common_1.HttpService,
        redis_service_1.RedisService])
], GithubSsoService);
exports.GithubSsoService = GithubSsoService;
//# sourceMappingURL=github-sso.service.js.map