import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/database/database.provider';
import { callProviders } from './call.provider';
import { CallResolver } from './call.resolver';
import { CallsController } from './calls.controller';
import { CallsService } from './calls.service';

@Module({
  controllers: [CallsController],
  providers: [
    CallResolver,
    CallsService,
    ...callProviders,
    ...databaseProviders,
  ],
})
export class CallsModule {}
