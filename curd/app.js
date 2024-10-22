const express = require('express')
const app = express()
const bcrypt = require('bcryptjs')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const appRoutes = require('./src/routes/base.route')



app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/curd', appRoutes)

module.exports = app