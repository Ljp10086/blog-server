import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CommentDto } from 'src/db/dtos/comment.dto';
import { PageDto } from 'src/db/dtos/page.dto';
import { Common } from 'src/types';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('/getCommentsByPage')
  async getCommentsByPage(@Body() body: PageDto) {
    return this.commentService.getCommentsByPage(body);
  }

  @Post('/create')
  async create(@Body() body: CommentDto) {
    return this.commentService.create(body);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') { id }: Common.DeleteParamType) {
    return this.commentService.delete(id);
  }
}
