import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CommentDto {
  @IsOptional()
  _id: string;

  @IsNotEmpty({ message: 'content字段不得为空' })
  @IsString({ message: 'content字段必须为字符串' })
  content: string;

  @IsNotEmpty({ message: 'userId字段不得为空' })
  @IsString({ message: 'userId字段必须为字符串' })
  userId: string;

  @IsNotEmpty({ message: 'blogId字段不得为空' })
  @IsString({ message: 'blogId字段必须为字符串' })
  blogId: string;

  @IsOptional()
  pid?: string;

  @IsOptional()
  isUpdated?: boolean;

  @IsOptional()
  isDeleted?: boolean;

  @IsOptional()
  likeCount?: number;

  @IsOptional()
  createDate?: Date;

  @IsOptional()
  updateDate?: Date;
}
