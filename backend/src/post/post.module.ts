import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './schema/post.schema';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { forwardRef } from '@nestjs/common/utils';
import { TableModule } from 'src/table/table.module';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    forwardRef(() => TableModule),
  ],

  exports: [PostService],
})
export class PostModule {}
