import { Schema, model } from 'mongoose'

const locationScheam = new Schema({

    city:{
        type: 'string',
        
    },
    state:{
        type: 'string',
    },
    country:{
        type: 'string',
    }


},{timestamps: true})
