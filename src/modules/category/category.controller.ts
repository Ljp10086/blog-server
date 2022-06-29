import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryDto } from 'src/db/dtos/category.dto';
import { PageDto } from 'src/db/dtos/page.dto';
import { Common } from 'src/types';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('getCategoryByPage')
  async getAllCategory(@Body() body: PageDto) {
    return this.categoryService.getCategory(body);
  }

  @Get('getCategoryById/:id')
  async getCategoryById(@Param('id') id: string) {
    return this.categoryService.getCategoryById(id);
  }

  @Post('create')
  async create(@Body() categoryDto: CategoryDto) {
    return this.categoryService.create(categoryDto);
  }

  @Post('update')
  async update(@Body() categoryDto: CategoryDto) {
    return this.categoryService.update(categoryDto);
  }

  @Delete('delete/:id')
  async delete(@Param() { id }: Common.DeleteParamType) {
    return this.categoryService.delete(id);
  }
}
