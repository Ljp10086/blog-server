import { HttpModule, Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from 'src/db/schemas/blog.schema';
import { UserSchema } from 'src/db/schemas/user.schema';
import { BlogLikeSchema } from 'src/db/schemas/blog-like.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'user',
        schema: UserSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'blogLikes',
        schema: BlogLikeSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'blog',
        schema: BlogSchema,
      },
    ]),
    HttpModule,
  ],
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
