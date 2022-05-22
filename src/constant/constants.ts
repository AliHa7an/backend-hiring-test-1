export const MONO_DB_CONNECTION_STRING =
  process.env.MONO_DB_CONNECTION_STRING || 'mongodb://localhost/turing-test';

export const DB_CONNECTION = 'DATABASE_CONNECTION';

export const CALL_TYPE = {
  completed: 'answered',
  'no-answer': 'missed',
  ringing: 'missed',
  busy: 'missed',
  'in-progress': 'missed',
};
