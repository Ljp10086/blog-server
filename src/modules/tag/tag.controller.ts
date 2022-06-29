import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PageDto } from 'src/db/dtos/page.dto';
import { TagDto } from 'src/db/dtos/tag.dto';
import { Common } from 'src/types';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post('getTagsByPage')
  async getTagsWithPage(@Body() pageDto: PageDto) {
    return this.tagService.getTagsWithPage(pageDto);
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
