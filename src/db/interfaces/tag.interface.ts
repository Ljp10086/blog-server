import { Document } from 'mongoose';

export interface TagInterface extends Document {
  _id: string;
  name: string;
  visitAllNumber?: number;
  createDate?: Date;
  updateDate?: Date;
  isDeleted?: boolean;
}
