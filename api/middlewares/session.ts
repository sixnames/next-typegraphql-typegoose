import session from 'express-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);

export default function sessionMiddleware(req: any, res: any, next: any) {
  const mongoStore = new MongoStore({
    client: req.dbClient,
    stringify: false,
  });
  return session({
    secret: `${process.env.SESSION_SECRET}`,
    store: mongoStore,
    resave: true,
    rolling: true,
    saveUninitialized: false,
  })(req, res, next);
}
