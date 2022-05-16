"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const redis_1 = require("redis");
const user_dto_1 = require("../db/dtos/user.dto");
const vars_1 = require("../utils/vars");
const client = (0, redis_1.createClient)({
    url: process.env.REDIS_URL,
});
client.connect();
client.on('error', (err) => console.log('Redis Client Error', err));
let RedisService = class RedisService {
    async set(key, value) {
        return client.set(key, value);
    }
    async setEx(key, value, expire) {
        return await client.setEx(key, expire, value);
    }
    async get(key) {
        return await client.get(key);
    }
    async del(key) {
        return await client.del(key);
    }
    async setUserInfo(cookie, userInfo) {
        return await this.setEx(`${cookie}_userInfo`, JSON.stringify(userInfo), vars_1.COOKIE_EXPIRE);
    }
    async getUserInfo(cookie) {
        return await this.get(`${cookie}_userInfo`);
    }
};
RedisService = __decorate([
    (0, common_1.Injectable)()
], RedisService);
exports.RedisService = RedisService;
//# sourceMappingURL=redis.service.js.map