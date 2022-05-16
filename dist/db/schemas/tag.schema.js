"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TagSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    visitAllNumber: {
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
//# sourceMappingURL=tag.schema.js.map