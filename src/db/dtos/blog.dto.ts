import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BlogDto {
  @IsOptional()
  _id: string;

  @IsNotEmpty({ message: 'title字段不得为空' })
  @IsString({ message: 'title字段必须为字符串' })
  title: string;

  @IsNotEmpty({ message: 'describe字段不得为空' })
  @IsString({ message: 'describe字段必须为字符串' })
  describe: string;
  // 0 dislike 1 like

  @IsOptional()
  tags?: string[];

  @IsOptional()
  category?: string[];

  @IsOptional()
  isPrivate?: boolean;

  @IsOptional()
  contentMd: string;

  @IsOptional()
  visitAllNumber?: number;

  @IsOptional()
  coverPic?: string;

  @IsOptional()
  likeCount?: number;

  @IsOptional()
  commentCount?: number;

  @IsInt()
  creator: number;

  @IsOptional()
  isDeleted?: boolean;

  @IsOptional()
  createDate?: Date;

  @IsOptional()
  updateDate?: Date;
}
