import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryDto } from 'src/db/dtos/category.dto';
import { PageDto } from 'src/db/dtos/page.dto';
import { CategoryInterface } from 'src/db/interfaces/category.interface';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('category')
    private readonly categoryModel: Model<CategoryInterface>,
  ) {}

  async getCategory({ pageNum, pageSize = 5 }: PageDto) {
    const list = await this.categoryModel
      .find({ isDeleted: false })
      .sort({ _id: -1 })
      .skip((pageNum - 1) * pageSize)
      .limit(pageSize)
      .exec();
    const total = await this.categoryModel.countDocuments({ isDeleted: false });
    return { list, total };
  }

  async getCategoryById(id: string) {
    return this.categoryModel.findOne({ _id: id });
  }

  async create(categoryDto: CategoryDto) {
    await this.categoryModel.create(categoryDto);
    return true;
  }

  async update(categoryDto: CategoryDto) {
    await this.categoryModel.updateOne({ _id: categoryDto._id }, categoryDto);
    return true;
  }

  async delete(id: string) {
    await this.categoryModel.updateOne({ _id: id }, { isDeleted: true });
    return true;
  }
}
