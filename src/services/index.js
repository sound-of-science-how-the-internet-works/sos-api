const states = require('./states/states.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(states);
};
