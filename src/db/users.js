const records = [
  {
    id: 1,
    username: 'jack',
    password: 'secret',
    displayName: 'Jack',
    emails: [{ value: 'jack@example.com' }],
  },
  {
    id: 2,
    username: 'jill',
    password: 'birthday',
    displayName: 'Jill',
    emails: [{ value: 'jill@example.com' }],
  },
];

exports.findByUsername = (username, cb) => {
  process.nextTick(() => {
    /* eslint-disable consistent-return */
    records.forEach(record => {
      if (record.username === username) {
        return cb(null, record);
      }
    });
    // return cb(null, null);
  });
};
