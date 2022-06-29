import { Schema, Types } from 'mongoose';
import { UserSchema } from './user.schema';

export const CommentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    pid: {
      type: Types.ObjectId,
      required: false,
    },
    user: {
      type: Types.ObjectId,
      ref: 'user',
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

CommentSchema.virtual('children', {
  ref: 'comment',
  localField: '_id',
  foreignField: 'pid',
  justOne: false,
});

CommentSchema.set('toJSON', { virtuals: true });
