import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  id: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  emptyPage: boolean;
  @Prop()
  listPage: boolean;
  @Prop()
  tablePage: boolean;
  @Prop()
  hide: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);
