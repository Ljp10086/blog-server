import { Document } from 'mongoose';

export interface CategoryInterface extends Document {
  _id: string;
  name: string;
  hot?: number;
  count?: number;
  createDate?: Date;
  updateDate?: Date;
  isDeleted?: boolean;
}
