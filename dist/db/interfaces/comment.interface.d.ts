import { Document } from 'mongoose';
export interface CommentInterface extends Document {
    _id: string;
    content: string;
    userId: string;
    blogId: string;
    pid?: string;
    isUpdated?: boolean;
    isDeleted?: boolean;
    likeCount?: number;
    createDate?: Date;
    updateDate?: Date;
}
