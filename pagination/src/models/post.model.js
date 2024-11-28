import {Schema, model} from 'mongoose';

const postSchema = new Schema({

    title:{
        type: 'string',
        required: true,
    },
    description:{
        type: 'string',
        required: false,
    },
    

})

const Post = model('posts', postSchema)
export  default Post