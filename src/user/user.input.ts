import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  _id: string;

  @Field({ nullable: true })
  username: string;
}
