import passport from 'passport';
import bcrypt from 'bcryptjs';
import { Strategy as LocalStrategy } from 'passport-local';
import { ObjectId } from 'mongodb';
import { User } from '../entities/User';

passport.serializeUser((user: User, done: any) => {
  done(null, user._id?.toString());
});

// passport#160
passport.deserializeUser((req: any, id: any, done: any) => {
  req.db
    .collection('users')
    .findOne(new ObjectId(id))
    .then((user: User) => done(null, user));
});

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req: any, email, password, done) => {
      const user = await req.db.collection('users').findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        done(null, user);
      }
      else done(null, false)
    },
  ),
);

export default passport;
