/* @flow */
/* eslint-disable no-console, no-shadow */

// import app from './app';
// import config from './config';

// Launch Node.js server
// if (!module.hot) {
//   app.listen(config.port, () => {
//     console.info(`The server is running at http://localhost:${config.port}/`);
//   });
// }

// //
// // Hot Module Replacement
// // -----------------------------------------------------------------------------
// if (module.hot) {
//   app.hot = module.hot;
//   module.hot.accept('./router');
// }

// // Shutdown Node.js app gracefully
// function handleExit(options, err) {
//   if (options.cleanup) {
//     const actions = [server.close];
//     actions.forEach((close, i) => {
//       try {
//         close(() => {
//           if (i === actions.length - 1) process.exit();
//         });
//       } catch (err) {
//         if (i === actions.length - 1) process.exit();
//       }
//     });
//   }
//   if (err) console.log(err.stack);
//   if (options.exit) process.exit();
// }

// process.on('exit', handleExit.bind(null, { cleanup: true }));
// process.on('SIGINT', handleExit.bind(null, { exit: true }));
// process.on('SIGTERM', handleExit.bind(null, { exit: true }));
// process.on('uncaughtException', handleExit.bind(null, { exit: true }));
