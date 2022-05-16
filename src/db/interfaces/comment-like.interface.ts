import { Document } from 'mongoose';

export interface CommentLikeInterface extends Document {
  _id: string;
  commentId: string;
  userId: string;
  isLike?: number;
  isDeleted?: boolean;
  createDate?: Date;
  updateDate?: Date;
}
