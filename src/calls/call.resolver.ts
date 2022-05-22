import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateCallingInput } from './call.input';
import { CallsService } from './calls.service';
import { Call } from './schemas/call.entity';

@Resolver(() => Call)
export class CallResolver {
  constructor(private callService: CallsService) {}

  @Mutation(() => Call)
  async createUser(@Args('input') input: CreateCallingInput) {
    return this.callService.sendCall(input);
  }
}
