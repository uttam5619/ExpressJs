import mongoose from 'mongoose';
import runServer from './server.config.js';



const connecteDB = ()=>{

    mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then((e)=>{
        console.log(`application connected successfully with database`)
        runServer()
    })
    .catch((err)=>{
        console.log(`application failed to connect with database`)
        console.log(err.message)
        process.exit(1)
    })
}

export default connecteDB