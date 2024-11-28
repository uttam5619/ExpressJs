import { Schema, model} from 'mongoose'

const categorySchema = new Schema({

    categoryType:{
        type: 'string',
        required: true,
        unique: true
    },
    

},{timestamps: true})