import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostService } from 'src/post/post.service';
import { Table, TableDocument } from './schema/table.schema';
import { Model } from 'mongoose';

@Injectable()
export class TableService {
  constructor(
    @InjectModel(Table.name) private tableModel: Model<TableDocument>,
    private postService: PostService,
  ) {}

  async createTable(createTableDto: any) {
    const post = await this.postService.getOne(createTableDto.id);
    if (!post) return;
    return await this.tableModel.create({
      post_id: createTableDto.id,
      header: createTableDto.table.header,
      content: createTableDto.table.content,
    });
  }

  async getTable(id: any) {
    const table = await this.tableModel.findOne({ post_id: id });
    return table;
  }
}
