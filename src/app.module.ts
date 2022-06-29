import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubSsoModule } from './modules/github-sso/github-sso.module';
import { RedisModule } from './redis/redis.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './modules/blog/blog.module';
import { TagModule } from './modules/tag/tag.module';
import { CategoryModule } from './modules/category/category.module';
import { CommentModule } from './modules/comment/comment.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [
    GithubSsoModule,
    RedisModule,
    BlogModule,
    TagModule,
    CategoryModule,
    CommentModule,
    AdminModule,
    MongooseModule.forRoot(process.env.MONGOOSE_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
