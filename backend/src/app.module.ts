import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { PostModule } from './post/post.module';
import { TableModule } from './table/table.module';

@Module({
  imports: [
    PostModule,
    TableModule,
    MongooseModule.forRoot('mongodb://localhost/TodoList'),
  ],
})
export class AppModule {}
