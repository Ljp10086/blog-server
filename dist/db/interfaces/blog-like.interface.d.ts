import { Document } from 'mongoose';
import Like from 'src/enums/like.enum';
export interface BlogLikeInterface extends Document {
    _id: string;
    blogId: string;
    userId: string;
    isLike?: Like;
    isDeleted?: boolean;
    createDate?: Date;
    updateDate?: Date;
}
