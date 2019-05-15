// Initializes the `states` service on path `/states`
const createService = require('feathers-memory')
const hooks = require('./states.hooks')
const seeds = require('./states.seeds')

module.exports = function (app) {
  
  const paginate = app.get('paginate')

  const options = {
    paginate,
    multi: true
  }

  // Initialize our service with any options it requires
  app.use('/states', createService(options))

  // Get our initialized service so that we can register hooks
  const service = app.service('states')

  service.hooks(hooks)

  // Seed the database
  seeds.seed(service)
}
