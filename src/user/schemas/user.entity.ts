import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
});

@ObjectType()
export class User extends Document {
  @Field(() => String)
  username: string;
}
