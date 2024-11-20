import mongoose from 'mongoose';

const connectDB =()=>{

    mongoose.connect()
    .then((e)=>{
        console.log(`application connected sucessfully with database `)
    })
    .catch((err)=>{
        console.log(`application failed to connect with database`)
        process.exit(1)
    })

}

export default connectDB