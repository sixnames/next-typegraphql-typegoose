import mongoose from 'mongoose';
import { createTestClient, TestQuery, TestSetOptions } from 'apollo-server-integration-testing';
import { ApolloServer } from 'apollo-server-express';
import { schema } from '../../apollo/schema';
import { DB_OPTIONS } from '../config';

export let testClient: {
  query: TestQuery;
  mutate: TestQuery;
  setOptions: TestSetOptions;
};

beforeAll(async () => {
  jest.setTimeout(30000);
  const apolloServer = new ApolloServer({
    schema,
    context(ctx) {
      return ctx;
    },
  });
  await mongoose.connect(`${process.env.MONGO_URL}`, DB_OPTIONS);
  testClient = createTestClient({
    apolloServer,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});
