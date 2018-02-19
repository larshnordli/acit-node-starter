import passport from 'passport';
import { BasicStrategy } from 'passport-http';

import users from './db/users';

passport.use(
  new BasicStrategy((username, password, cb) => {
    users.findByUsername(username, (err, user) => {
      console.log(`passport ${err}${user}`);
      console.log(`username and password sent ${username}${password}`);
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password !== password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  }),
);

export default passport;
