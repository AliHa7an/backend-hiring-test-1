import { Inject, Injectable } from '@nestjs/common';
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';
import { CALL_MODEL } from './call.provider';
import { Model } from 'mongoose';
import { Call } from './schemas/call.entity';
import { CALL_TYPE } from 'src/constant/constants';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VoiceResponse = require('twilio').twiml.VoiceResponse;

@Injectable()
export class CallsService {
  public constructor(
    @InjectTwilio() private readonly client: TwilioClient,
    @Inject(CALL_MODEL)
    private callModel: Model<Call>,
  ) {}

  async sendCall({ targetPhoneNumber, digits }) {
    try {
      const twiml = new VoiceResponse();
      let isRecorded = false;
      let call;
      function gather() {
        const gatherNode = twiml.gather({ numDigits: 1 });
        gatherNode.say('For calling, press 1. For voice message, press 2.');

        // If the user doesn't enter input, loop
        twiml.redirect('/call');
      }

      // If the user entered digits, process their request
      if (digits) {
        switch (digits) {
          case '1':
            twiml.say(
              'You selected calling. Your call is forwarding to the person number!',
            );
            call = await this.client.calls.create({
              url: 'http://demo.twilio.com/docs/voice.xml',
              from: process.env.TWILIO_PHONE_NUMBER,
              to: targetPhoneNumber || '+923115427994',
            });
            break;
          case '2':
            twiml.say(
              'You selected voice message. please record your voice message!',
            );
            twiml.record({
              timeout: 10,
              transcribe: true,
            });
            isRecorded = true;
            break;
          default:
            twiml.say("Sorry, I don't understand that choice.");
            twiml.pause();
            gather();
            break;
        }

        const {
          duration,
          dateCreated,
          direction,
          to,
          from,
          forwardedFrom,
          status,
        } = call;
        try {
          await this.callModel.create({
            duration,
            direction,
            created_at: dateCreated,
            to,
            from,
            via: forwardedFrom,
            call_type: status,
          });
        } catch (err) {
          console.log(err);
        }
        return call;
      } else {
        // If no input was sent, use the <Gather> verb to collect user input
        gather();
      }

      // Render the response as XML in reply to the webhook request
      const res = twiml.toString();
      return res;
    } catch (e) {
      return e;
    }
  }
}
