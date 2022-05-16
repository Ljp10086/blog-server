"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CommentSchema = new mongoose_1.Schema({
    content: {
        type: String,
        required: true,
    },
    pid: {
        type: String,
        required: false,
    },
    userId: {
        type: String,
        required: true,
    },
    blogId: {
        type: String,
        required: true,
    },
    isUpdated: {
        type: Boolean,
        required: false,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        required: false,
        default: false,
    },
    likeCount: {
        type: Number,
        required: false,
        default: 0,
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
//# sourceMappingURL=comment.schema.js.map