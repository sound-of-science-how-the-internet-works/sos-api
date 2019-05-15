module.exports = function(app) {
  if(typeof app.channel !== 'function') {
    // If no real-time functionality has been configured just return
    return;
  }

  app.on('connection', connection => {
    app.channel('anonymous').join(connection);
  });

  app.publish((data, hook) => {
    return app.channel('anonymous');
  });

};
