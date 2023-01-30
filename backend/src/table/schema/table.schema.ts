import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import mongoose, { HydratedDocument } from 'mongoose';

export type TableDocument = HydratedDocument<Table>;
export type CellDocument = HydratedDocument<Cell>;
export type TableContentCellDocument = HydratedDocument<TableContentCell>;
export type TableContentDocument = HydratedDocument<TableContent>;

@Schema()
export class Cell {
  @Prop()
  type: string;
  @Prop()
  width: number;
  @Prop()
  id: string;
  @Prop()
  _canRemove: boolean;
}

export const CellSchema = SchemaFactory.createForClass(Cell);

@Schema()
export class TableContentCell {
  @Prop()
  value: string;
  @Prop()
  width: number;
}

export const TableContentCellSchema =
  SchemaFactory.createForClass(TableContentCell);

@Schema()
export class TableContent {
  @Prop()
  type: string;
  @Prop()
  cells: [TableContentCell];
}

export const TableContentSchema = SchemaFactory.createForClass(TableContent);

@Schema()
export class Table {
  @Prop({ ref: 'Post' })
  post_id: mongoose.Schema.Types.ObjectId;
  @Prop()
  header: [Cell];
  @Prop()
  content: [TableContent];
}

export const TableSchema = SchemaFactory.createForClass(Table);
