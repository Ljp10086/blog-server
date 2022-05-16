import { Schema } from 'mongoose';

export const TagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // 标签热度
    visitAllNumber: {
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
