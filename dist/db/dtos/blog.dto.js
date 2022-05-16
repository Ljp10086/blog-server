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
exports.BlogDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class BlogDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, title: { required: true, type: () => String }, describe: { required: true, type: () => String }, tags: { required: false, type: () => [String] }, category: { required: false, type: () => [String] }, isPrivate: { required: false, type: () => Boolean }, contentMd: { required: true, type: () => String }, visitAllNumber: { required: false, type: () => Number }, coverPic: { required: false, type: () => String }, likeCount: { required: false, type: () => Number }, commentCount: { required: false, type: () => Number }, creator: { required: true, type: () => Number }, isDeleted: { required: false, type: () => Boolean }, createDate: { required: false, type: () => Date }, updateDate: { required: false, type: () => Date } };
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BlogDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'title字段不得为空' }),
    (0, class_validator_1.IsString)({ message: 'title字段必须为字符串' }),
    __metadata("design:type", String)
], BlogDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'describe字段不得为空' }),
    (0, class_validator_1.IsString)({ message: 'describe字段必须为字符串' }),
    __metadata("design:type", String)
], BlogDto.prototype, "describe", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], BlogDto.prototype, "tags", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], BlogDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], BlogDto.prototype, "isPrivate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BlogDto.prototype, "contentMd", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BlogDto.prototype, "visitAllNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BlogDto.prototype, "coverPic", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BlogDto.prototype, "likeCount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BlogDto.prototype, "commentCount", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], BlogDto.prototype, "creator", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], BlogDto.prototype, "isDeleted", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BlogDto.prototype, "createDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BlogDto.prototype, "updateDate", void 0);
exports.BlogDto = BlogDto;
//# sourceMappingURL=blog.dto.js.map