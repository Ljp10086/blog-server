"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentLikeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CommentLikeSchema = new mongoose_1.Schema({
    commentId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    isLike: {
        type: Number,
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
//# sourceMappingURL=comment-like.schema.js.map