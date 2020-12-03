import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import { DB_OPTIONS } from '../config';

let connected = false;
const client = new MongoClient(`${process.env.MONGO_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mongoose connection
const connectMongo = async () => {
  try {
    if (!connected) {
      await mongoose.connect(`${process.env.MONGO_URL}`, DB_OPTIONS);
      connected = true;
    }
  } catch (e) {
    console.log(e);
  }
};

export default async function database(req: any, _res: any, next: any) {
  if (!client.isConnected()) {
    await client.connect().catch((e) => {
      console.log(e);
    });
  }

  await connectMongo();

  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);
  return next();
}
