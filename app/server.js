import express from 'express';
import { config } from 'dotenv'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import routes from './src/routes/appRoute.js';
import runServer from './src/config/serverConfig.js';

config()
export const app = express()


app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/app', routes)

runServer()


