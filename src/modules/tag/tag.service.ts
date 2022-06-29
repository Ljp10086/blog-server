import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PageDto } from 'src/db/dtos/page.dto';
import { TagDto } from 'src/db/dtos/tag.dto';
import { TagInterface } from 'src/db/interfaces/tag.interface';

@Injectable()
export class TagService {
  constructor(
    @InjectModel('tag')
    private readonly tagModel: Model<TagInterface>,
  ) {}

  async getTagsWithPage({ pageNum, pageSize }: PageDto) {
    const list = await this.tagModel
      .find({ isDeleted: false })
      .sort({ _id: -1 })
      .skip((pageNum - 1) * pageSize)
      .limit(pageSize)
      .exec();
    console.log(pageNum, pageSize);
    const total = await this.tagModel.countDocuments({ isDeleted: false });
    return { list, total };
  }

  async getAllTagById(id: string) {
    return await this.tagModel.findOne({ _id: id });
  }

  async create(tagDto: TagDto) {
    await this.tagModel.create(tagDto);
    return true;
  }

  async update(tagDto: TagDto) {
    await this.tagModel.updateOne({ _id: tagDto._id }, tagDto);
    return true;
  }

  async delete(id: string) {
    await this.tagModel.updateOne({ _id: id }, { isDeleted: true });
    return true;
  }
}
