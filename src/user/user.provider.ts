import { Connection } from 'mongoose';
import { DB_CONNECTION } from 'src/constant/constants';
import { UserSchema } from './schemas/user.entity';

export const USER_MODEL = 'USER_MODEL';
export const userProviders = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [DB_CONNECTION],
  },
];
