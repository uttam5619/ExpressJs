const express = require('express');
const appRoutes = express()

const version1Routes = require('./v1/v1Route')

appRoutes.use('/v1/auth', version1Routes)
appRoutes.use('/v1/todo', version1Routes)
appRoutes.use('/v1/admin', version1Routes)

module.exports = appRoutes