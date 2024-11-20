import express from 'express'
import { config } from 'dotenv'
import connecteDB from './src/config/db.config.js'
import appRoutes from './src/routes/appRoute.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

config()
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/', appRoutes)



connecteDB()

export default app