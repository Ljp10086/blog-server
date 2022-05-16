import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PageDto {
  @IsInt()
  pageSize = 5;

  @IsInt()
  pageNum: number;
}
