import { Role } from 'src/enums/role.enum';
export declare class UserDto {
    _id?: string;
    role?: Role;
    userId: number;
    login: string;
    name?: string;
    email?: string;
    avatarUrl?: string;
    createDate?: Date;
    updateDate?: Date;
    isDeleted?: boolean;
}
