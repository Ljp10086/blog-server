import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CommentDto } from 'src/db/dtos/comment.dto';
import { PageDto } from 'src/db/dtos/page.dto';
import { CommentInterface } from 'src/db/interfaces/comment.interface';

type CommentsPopulate = {
  path?: string;
  populate?: CommentsPopulate[];
  match?: any;
};

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('comment')
    private readonly commentModel: Model<CommentInterface>,
  ) {}

  getPopulate() {
    const commentPopulate: CommentsPopulate[] = [
      {
        path: 'children',
        match: {
          isDeleted: false,
        },
        populate: [],
      },
      {
        path: 'user',
        match: {
          isDeleted: false,
        },
        populate: [],
      },
    ];
    let current = commentPopulate;
    for (let i = 0; i < 6; i++) {
      current[0].populate = [
        {
          path: 'children',
          match: {
            isDeleted: false,
          },
          populate: [],
        },
        {
          path: 'user',
          match: {
            isDeleted: false,
          },
          populate: [],
        },
      ];
      if (i !== 6) {
        current[0].populate[0].populate = [];
        current = current[0].populate;
      }
    }
    return commentPopulate;
  }

  async getCommentsByPage({ pageNum, pageSize }: PageDto) {
    const list = await this.commentModel
      .find({
        isDeleted: false,
        pid: null,
      })
      .sort({ _id: -1 })
      .skip((pageNum - 1) * pageSize)
      .limit(pageSize)
      .populate(this.getPopulate())
      // .populate(this.getPopulateUser())
      .exec();
    const total = await this.commentModel.countDocuments({
      pid: null,
      isDeleted: false,
    });

    return { list, total };
  }

  async create(body: CommentDto) {
    try {
      await this.commentModel.create(body);
      return true;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('创建失败');
    }
  }

  delete(id: string) {
    return this.commentModel.updateOne({ _id: id }, { isDeleted: true });
  }
}
