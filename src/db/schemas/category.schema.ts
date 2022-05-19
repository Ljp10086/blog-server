import { Schema } from 'mongoose';

export const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // 热度
    hot: {
      type: Number,
      required: false,
      default: 0,
    },
    // count
    count: {
      type: Number,
      required: false,
      default: 0,
    },
    coverPic: {
      type: String,
      required: false,
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
