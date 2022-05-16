import Like from 'src/enums/like.enum';
export declare class BlogLikeDto {
    _id: string;
    blogId: string;
    userId: string;
    isLike?: Like;
    isDeleted?: boolean;
    createDate?: Date;
    updateDate?: Date;
}
