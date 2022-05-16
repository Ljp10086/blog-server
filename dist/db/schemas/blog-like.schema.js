"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogLikeSchema = void 0;
const mongoose_1 = require("mongoose");
const like_enum_1 = require("../../enums/like.enum");
exports.BlogLikeSchema = new mongoose_1.Schema({
    blogId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    isLike: {
        type: like_enum_1.default,
        required: false,
        default: 0,
    },
    isDeleted: {
        type: Boolean,
        required: false,
        default: false,
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
    updateDate: {
        type: Date,
        default: Date.now,
    },
}, {
    versionKey: false,
});
//# sourceMappingURL=blog-like.schema.js.map