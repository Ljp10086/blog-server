import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from 'src/db/schemas/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'category',
        schema: CategorySchema,
      },
    ]),
  ],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
