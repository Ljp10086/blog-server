import { Schema } from 'mongoose';

export const CommentLikeSchema = new Schema(
  {
    commentId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    // 0 dislike 1 like
    isLike: {
      type: Number,
      required: false,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
    createDate: {
      type: Date,
      default: Date.now,
    },
    updateDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);
