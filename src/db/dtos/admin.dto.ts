import { IsArray, IsIn, IsInt, IsNumber, IsOptional } from 'class-validator';
import { Schema } from 'mongoose';

export class AdminDto {
  @IsOptional()
  _id: string;

  @IsArray()
  role?: number[];
  @IsInt()
  userId: number;

  @IsOptional()
  isDeleted?: boolean;

  @IsOptional()
  createDate?: Date;

  @IsOptional()
  updateDate?: Date;
}
