module.exports = {
  // Server values
  port: process.env.PORT || 3001,
  host: process.env.VCAP_APP_HOST || 'localhost',
};
