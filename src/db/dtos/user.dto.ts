import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Role } from 'src/enums/role.enum';

export class UserDto {
  @IsOptional()
  _id?: string;

  @IsOptional()
  role?: Role;

  @IsOptional()
  userId: number;

  @IsNotEmpty({ message: 'login字段不得为空' })
  @IsString({ message: 'login字段必须为字符串' })
  login: string;

  @IsOptional()
  name?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  avatarUrl?: string;

  @IsOptional()
  createDate?: Date;

  @IsOptional()
  updateDate?: Date;

  @IsOptional()
  isDeleted?: boolean;
}
