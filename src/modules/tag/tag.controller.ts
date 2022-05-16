import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TagDto } from 'src/db/dtos/tag.dto';
import { Common } from 'src/types';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get('getTags')
  async getAllTags() {
    return this.tagService.getAllTags();
  }

  @Get('getTagById/:id')
  async getAllTagById(@Param('id') id: string) {
    return this.tagService.getAllTagById(id);
  }

  @Post('create')
  async create(@Body() tagDto: TagDto) {
    return this.tagService.create(tagDto);
  }

  @Post('update')
  async update(@Body() tagDto: TagDto) {
    return this.tagService.update(tagDto);
  }

  @Delete('delete/:id')
  async delete(@Param() { id }: Common.DeleteParamType) {
    return this.tagService.delete(id);
  }
}
