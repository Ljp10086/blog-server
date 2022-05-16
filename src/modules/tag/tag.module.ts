import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TagSchema } from '../../db/schemas/tag.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'tag',
        schema: TagSchema,
      },
    ]),
  ],
  providers: [TagService],
  controllers: [TagController],
})
export class TagModule {}
