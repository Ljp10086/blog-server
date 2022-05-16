import { Schema } from 'mongoose';

export const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    describe: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: false,
    },
    category: {
      type: [String],
      required: false,
    },
    isPrivate: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
    contentMd: {
      type: String,
      required: true,
    },
    // 浏览量
    visitAllNumber: {
      type: Number,
      required: false,
      default: 0,
    },
    // 封面图
    coverPic: {
      type: String,
      required: false,
    },
    likeCount: {
      type: Number,
      required: false,
      default: 0,
    },
    commentCount: {
      type: Number,
      required: false,
      default: 0,
    },
    creator: {
      type: Number,
      required: true,
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
