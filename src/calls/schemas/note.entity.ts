import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const NoteSchema = new mongoose.Schema({
  content: { type: String, required: false },
});

@ObjectType()
export class Note extends Document {
  @Field()
  content: string;
}
