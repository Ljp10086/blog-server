export declare class CommentDto {
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
