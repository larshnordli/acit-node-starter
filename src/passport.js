// import passport from 'passport';
// import BasicStrategy from 'passport-http';
// import config from './config';

// const users = [
//   {
//     username: 'test-user',
//     password: 'test-password',
//     id: 1,
//   },
// ];

// passport.use(
//   new BasicStrategy((userid, password, done) => {
//     if (
//       findOne({ username: userid }, (error, user) => {
//         if (error) {
//           return done(error);
//         }
//         if (!user) {
//           return done(null, false);
//         }
//         if (!user.verifyPassword(password)) {
//           return done(null, false);
//         }
//         return done(null, user);
//       })
//     );
//   }),
// );
