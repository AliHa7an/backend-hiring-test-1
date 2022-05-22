import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInput } from './user.input';
import { UserService } from '../user/user.service';
import { User } from './schemas/user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.userService.create(input);
  }

  @Query(() => [User])
  async users() {
    return this.userService.find();
  }

  @Query(() => User)
  async user(@Args('input') input: CreateUserInput) {
    return this.userService.findOne(input);
  }
}
