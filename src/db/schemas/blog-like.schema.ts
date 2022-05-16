import { Schema } from 'mongoose';
import Like from 'src/enums/like.enum';

export const BlogLikeSchema = new Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    // 0 dislike 1 like
    isLike: {
      type: Like,
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
