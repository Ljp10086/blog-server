import { Schema } from 'mongoose';

export const CommentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    pid: {
      type: String,
      required: false,
    },
    userId: {
      type: String,
      required: true,
    },
    blogId: {
      type: String,
      required: true,
    },
    isUpdated: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
    likeCount: {
      type: Number,
      required: false,
      default: 0,
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
