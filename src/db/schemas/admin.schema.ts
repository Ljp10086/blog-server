import { Schema } from 'mongoose';

export const AdminSchema = new Schema(
  {
    role: {
      type: [Number],
      required: false,
    },
    userId: {
      type: Number,
      unique: true,
      required: true,
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
