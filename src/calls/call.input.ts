import { Field, InputType } from '@nestjs/graphql';
import { Note } from './schemas/note.entity';

@InputType()
export class CreateNoteInput {
  @Field({ nullable: true })
  content: string;
}

@InputType()
export class CreateCallingInput {
  @Field()
  targetPhoneNumber: string;
  @Field()
  digits: string;
}

@InputType()
export class CreateCallInput {
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
