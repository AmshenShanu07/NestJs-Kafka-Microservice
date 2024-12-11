import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Bookmark {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  url: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: SchemaTypes.ObjectId, required: true })
  userId: string;
}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);
