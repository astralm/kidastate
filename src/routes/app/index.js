module.exports = {
  path: '/app',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/MainApp'));
    });
  }
};
