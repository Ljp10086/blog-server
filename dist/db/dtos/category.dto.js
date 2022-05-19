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
exports.CategoryDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CategoryDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: false, type: () => String }, name: { required: true, type: () => String }, hot: { required: false, type: () => Number }, count: { required: false, type: () => Number }, createDate: { required: false, type: () => Date }, coverPic: { required: false, type: () => String }, updateDate: { required: false, type: () => Date }, isDeleted: { required: false, type: () => Boolean } };
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CategoryDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'name字段必须为字符串' }),
    __metadata("design:type", String)
], CategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CategoryDto.prototype, "hot", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CategoryDto.prototype, "count", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CategoryDto.prototype, "createDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CategoryDto.prototype, "coverPic", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CategoryDto.prototype, "updateDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CategoryDto.prototype, "isDeleted", void 0);
exports.CategoryDto = CategoryDto;
//# sourceMappingURL=category.dto.js.map