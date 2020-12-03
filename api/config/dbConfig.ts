import { ConnectionOptions } from 'mongoose';

export const DB_OPTIONS: ConnectionOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
