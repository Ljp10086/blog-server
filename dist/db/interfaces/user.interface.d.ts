import { Document } from 'mongoose';
import { Role } from 'src/enums/role.enum';
export interface UserInterface extends Document {
    _id?: string;
    role?: Role;
    userId: number;
    login: string;
    name: string;
    email?: string;
    avatarUrl?: string;
    createDate: Date;
    updateDate: Date;
    isDeleted?: boolean;
}
