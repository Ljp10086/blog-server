import { IsOptional, IsString } from 'class-validator';

export class CategoryDto {
  @IsOptional()
  _id?: string;

  @IsString({ message: 'name字段必须为字符串' })
  name: string;

  @IsOptional()
  hot?: number;

  @IsOptional()
  count?: number;

  @IsOptional()
  createDate?: Date;

  @IsOptional()
  updateDate?: Date;

  @IsOptional()
  isDeleted?: boolean;
}
