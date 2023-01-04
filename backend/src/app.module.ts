import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostModule, MongooseModule.forRoot('mongodb://localhost/TodoList')],
})
export class AppModule {}
