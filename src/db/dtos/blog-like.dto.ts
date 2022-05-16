import {
  IsBoolean,
  IsDate,
  IsEnum,
  isIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import Like from 'src/enums/like.enum';

export class BlogLikeDto {
  @IsOptional()
  _id: string;

  @IsNotEmpty({ message: 'blogId字段不得为空' })
  blogId: string;

  @IsNotEmpty({ message: 'userId字段不得为空' })
  userId: string;

  // * 0 dislike 1 like
  // , { message: 'isLike字段必须为整数值' }
  // @IsOptional()
  @IsEnum(Like, { message: '枚举不正确' })
  isLike?: Like;

  @IsOptional()
  @IsBoolean()
  isDeleted?: boolean;

  @IsOptional()
  @IsDate()
  createDate?: Date;

  @IsOptional()
  @IsDate()
  updateDate?: Date;
}
