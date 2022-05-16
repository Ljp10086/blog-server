"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const role_enum_1 = require("../../enums/role.enum");
exports.UserSchema = new mongoose_1.Schema({
    role: {
        type: Number,
        require: true,
        default: role_enum_1.Role.Visitor,
    },
    login: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    avatarUrl: {
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
//# sourceMappingURL=user.schema.js.map