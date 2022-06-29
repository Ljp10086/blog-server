import { Document } from 'mongoose';

export interface CommentInterface extends Document {
  _id: string;
  content: string;
  user: string;
  blogId: string;
  // * 回复
  pid?: string;
  isUpdated?: boolean;
  isDeleted?: boolean;
  likeCount?: number;
  createDate?: Date;
  updateDate?: Date;
}
