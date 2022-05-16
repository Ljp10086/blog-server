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
exports.BlogLikeDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const like_enum_1 = require("../../enums/like.enum");
class BlogLikeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, blogId: { required: true, type: () => String }, userId: { required: true, type: () => String }, isLike: { required: false, enum: require("../../enums/like.enum").default }, isDeleted: { required: false, type: () => Boolean }, createDate: { required: false, type: () => Date }, updateDate: { required: false, type: () => Date } };
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BlogLikeDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'blogId字段不得为空' }),
    __metadata("design:type", String)
], BlogLikeDto.prototype, "blogId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'userId字段不得为空' }),
    __metadata("design:type", String)
], BlogLikeDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(like_enum_1.default, { message: '枚举不正确' }),
    __metadata("design:type", Number)
], BlogLikeDto.prototype, "isLike", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], BlogLikeDto.prototype, "isDeleted", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], BlogLikeDto.prototype, "createDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], BlogLikeDto.prototype, "updateDate", void 0);
exports.BlogLikeDto = BlogLikeDto;
//# sourceMappingURL=blog-like.dto.js.map