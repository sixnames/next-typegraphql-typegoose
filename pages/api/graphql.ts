import nextConnect from 'next-connect';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../apollo/schema';
import middleware from '../../api/middlewares/middleware';

let apolloServer: ApolloServer;

export const createApolloServer = () => {
  if (!apolloServer) {
    apolloServer = new ApolloServer({
      schema,
      context(ctx) {
        return ctx;
      },
      playground:
        process.env.NODE_ENV === 'production'
          ? false
          : {
              settings: {
                'request.credentials': 'include',
              },
            },
    });
  }
  return apolloServer;
};

const handler = nextConnect();
handler.use(middleware).use(
  createApolloServer().createHandler({
    path: '/api/graphql',
  }),
);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
