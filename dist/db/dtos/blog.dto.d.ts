export declare class BlogDto {
    _id: string;
    title: string;
    describe: string;
    tags?: string[];
    category?: string[];
    isPrivate?: boolean;
    contentMd: string;
    visitAllNumber?: number;
    coverPic?: string;
    likeCount?: number;
    commentCount?: number;
    creator: number;
    isDeleted?: boolean;
    createDate?: Date;
    updateDate?: Date;
}
