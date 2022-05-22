import mongoose from 'mongoose';
import {
  DB_CONNECTION,
  MONO_DB_CONNECTION_STRING,
} from '../constant/constants';

export const databaseProviders = [
  {
    provide: DB_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(MONO_DB_CONNECTION_STRING),
  },
];
