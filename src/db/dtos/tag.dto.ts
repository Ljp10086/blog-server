import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class TagDto {
  @IsOptional()
  _id: string;

  @IsNotEmpty({ message: 'name字段不得为空' })
  @IsString({ message: 'name字段必须为字符串' })
  name: string;

  @IsOptional()
  visitAllNumber?: number;

  @IsOptional()
  createDate?: Date;

  @IsOptional()
  updateDate?: Date;

  @IsOptional()
  isDeleted?: boolean;
}
