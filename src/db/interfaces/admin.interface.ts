import { Schema } from 'mongoose';

export interface AdminInterface {
  role?: number[];
  userId: number;
  isDeleted?: boolean;
  createDate?: Date;
  updateDate?: Date;
}
