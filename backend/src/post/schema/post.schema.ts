import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import mongoose, { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  title: string;
  @Prop()
  table: boolean;
  @Prop()
  checkList: boolean;
  @Prop()
  list: boolean;
  @Prop()
  empty: boolean;
  @Prop()
  hide: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);
