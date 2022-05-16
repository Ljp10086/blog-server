"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookiesToObj = void 0;
const cookiesToObj = (cookies) => cookies.split(';').reduce((obj, str, i) => {
    const cookiesItem = str.trim().split('=');
    obj[cookiesItem[0]] = cookiesItem[1];
    return obj;
}, {});
exports.cookiesToObj = cookiesToObj;
//# sourceMappingURL=utils.js.map