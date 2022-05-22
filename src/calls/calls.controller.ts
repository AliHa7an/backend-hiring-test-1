import { Body, Controller, Post } from '@nestjs/common';
import { CallsService } from './calls.service';

class ReceiverPhoneNumber {
  targetPhoneNumber: string;
  digits: string;
}

@Controller('calls')
export class CallsController {
  constructor(private readonly callsService: CallsService) {}

  @Post()
  async sendCall(@Body() body: ReceiverPhoneNumber): Promise<any> {
    return await this.callsService.sendCall(body);
  }
}
