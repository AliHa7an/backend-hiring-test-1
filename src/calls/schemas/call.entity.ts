import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Note } from './note.entity';

export const CallSchema = new mongoose.Schema({
  direction: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  duration: { type: Number },
  is_archived: { type: Boolean, required: true, default: false },
  call_type: { type: String },
  via: { type: String },
  created_at: { type: String },
  notes: [{ ref: Note, type: mongoose.Schema.Types.ObjectId, required: false }],
});

@ObjectType()
export class Call extends Document {
  @Field({ nullable: true })
  direction: string;

  @Field({ nullable: true })
  from: string;

  @Field({ nullable: true })
  to: string;

  @Field({ nullable: true })
  duration: number;

  @Field({ nullable: true })
  is_archived: string;

  @Field({ nullable: true })
  call_type: string;

  @Field({ nullable: true })
  via: string;

  @Field({ nullable: true })
  created_at: string;

  @Field(() => [Note], { nullable: true })
  notes: Note[];
}
