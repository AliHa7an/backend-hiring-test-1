import { Connection } from 'mongoose';
import { DB_CONNECTION } from 'src/constant/constants';
import { CallSchema } from './schemas/call.entity';
import { NoteSchema } from './schemas/note.entity';

export const CALL_MODEL = 'CALL_MODEL';
export const NOTE_MODEL = 'CALL_MODEL';
export const callProviders = [
  {
    provide: CALL_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Call', CallSchema),
    inject: [DB_CONNECTION],
  },
  {
    provide: NOTE_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Call', NoteSchema),
    inject: [DB_CONNECTION],
  },
];
