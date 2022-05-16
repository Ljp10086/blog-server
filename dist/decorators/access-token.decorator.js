"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenObj = void 0;
const common_1 = require("@nestjs/common");
const github_sso_type_1 = require("../types/github-sso.type");
exports.AccessTokenObj = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const { accessTokenObj } = request;
    if (accessTokenObj) {
        return accessTokenObj;
    }
    else {
        throw new Error('userInfo字段为undefined');
    }
});
//# sourceMappingURL=access-token.decorator.js.map