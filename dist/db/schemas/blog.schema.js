"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BlogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    describe: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: false,
    },
    category: {
        type: [String],
        required: false,
    },
    isPrivate: {
        type: Boolean,
        required: false,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        required: false,
        default: false,
    },
    contentMd: {
        type: String,
        required: true,
    },
    visitAllNumber: {
        type: Number,
        required: false,
        default: 0,
    },
    coverPic: {
        type: String,
        required: false,
    },
    likeCount: {
        type: Number,
        required: false,
        default: 0,
    },
    commentCount: {
        type: Number,
        required: false,
        default: 0,
    },
    creator: {
        type: Number,
        required: true,
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
//# sourceMappingURL=blog.schema.js.map