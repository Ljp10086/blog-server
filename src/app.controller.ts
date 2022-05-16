import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BlogDto } from './db/dtos/blog.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
