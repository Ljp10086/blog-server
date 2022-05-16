"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessToken = void 0;
const common_1 = require("@nestjs/common");
const github_sso_type_1 = require("../types/github-sso.type");
exports.accessToken = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const { accessToken } = request;
    if (accessToken) {
        return accessToken;
    }
    else {
        throw new Error('userInfo字段为undefined');
    }
});
//# sourceMappingURL=user-info.decorator.js.map