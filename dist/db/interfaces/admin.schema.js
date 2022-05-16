"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AdminSchema = new mongoose_1.Schema({
    role: {
        type: [Number],
        required: false,
    },
    userId: {
        type: Number,
        unique: true,
        required: true,
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
//# sourceMappingURL=admin.schema.js.map