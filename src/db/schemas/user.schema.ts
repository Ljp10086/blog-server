import { Schema } from 'mongoose';
import { Role } from 'src/enums/role.enum';

export const UserSchema = new Schema(
  {
    role: {
      type: Number,
      require: true,
      default: Role.Visitor,
    },
    login: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    avatarUrl: {
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
