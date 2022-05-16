import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CommentLikeDto {
  @IsOptional()
  _id: string;

  @IsNotEmpty({ message: 'commentId字段不得为空' })
  @IsString({ message: 'commentId字段必须为字符串' })
  commentId: string;

  @IsNotEmpty({ message: 'userId字段不得为空' })
  @IsString({ message: 'userId字段必须为字符串' })
  userId: string;

  @IsOptional()
  isLike?: number;

  @IsOptional()
  isDeleted?: boolean;

  @IsOptional()
  createDate?: Date;

  @IsOptional()
  updateDate?: Date;
}
