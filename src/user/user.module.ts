import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/database/database.provider';
import { userProviders } from './user.provider';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [
    UserResolver,
    UserService,
    ...userProviders,
    ...databaseProviders,
  ],
})
export class UserModule {}
