"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.logger = void 0;
const log4js = require("log4js");
exports.logger = log4js.getLogger();
exports.logger.level = 'debug';
function log(req, res, next) {
    var _a, _b;
    const origin = ((_a = req.headers) === null || _a === void 0 ? void 0 : _a.origin) || ((_b = req.headers) === null || _b === void 0 ? void 0 : _b.host);
    console.log('first');
    if (origin) {
        exports.logger.info(`接口【${req.url}】【${req.method}】被【${origin}】调用！`);
    }
    else {
        exports.logger.info(`接口【${req.url}】【${req.method}】被调用！`);
    }
    next();
}
exports.log = log;
//# sourceMappingURL=middleware.js.map