import { Module } from '@nestjs/common';
import { TableController } from './table.controller';
import { TableService } from './table.service';
import { forwardRef } from '@nestjs/common/utils';
import { MongooseModule } from '@nestjs/mongoose';
import { Table, TableSchema } from './schema/table.schema';
import { PostModule } from 'src/post/post.module';

@Module({
  controllers: [TableController],
  providers: [TableService],
  imports: [
    MongooseModule.forFeature([{ name: Table.name, schema: TableSchema }]),
    forwardRef(() => PostModule),
  ],
  exports: [TableService],
})
export class TableModule {}
