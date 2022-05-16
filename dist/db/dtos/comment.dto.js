"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CommentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, content: { required: true, type: () => String }, userId: { required: true, type: () => String }, blogId: { required: true, type: () => String }, pid: { required: false, type: () => String }, isUpdated: { required: false, type: () => Boolean }, isDeleted: { required: false, type: () => Boolean }, likeCount: { required: false, type: () => Number }, createDate: { required: false, type: () => Date }, updateDate: { required: false, type: () => Date } };
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CommentDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'content字段不得为空' }),
    (0, class_validator_1.IsString)({ message: 'content字段必须为字符串' }),
    __metadata("design:type", String)
], CommentDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'userId字段不得为空' }),
    (0, class_validator_1.IsString)({ message: 'userId字段必须为字符串' }),
    __metadata("design:type", String)
], CommentDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'blogId字段不得为空' }),
    (0, class_validator_1.IsString)({ message: 'blogId字段必须为字符串' }),
    __metadata("design:type", String)
], CommentDto.prototype, "blogId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CommentDto.prototype, "pid", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CommentDto.prototype, "isUpdated", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CommentDto.prototype, "isDeleted", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CommentDto.prototype, "likeCount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CommentDto.prototype, "createDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CommentDto.prototype, "updateDate", void 0);
exports.CommentDto = CommentDto;
//# sourceMappingURL=comment.dto.js.map