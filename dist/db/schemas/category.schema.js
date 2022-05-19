"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose_1 = require("mongoose");
exports.CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    hot: {
        type: Number,
        required: false,
        default: 0,
    },
    count: {
        type: Number,
        required: false,
        default: 0,
    },
    coverPic: {
        type: String,
        required: false,
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
//# sourceMappingURL=category.schema.js.map