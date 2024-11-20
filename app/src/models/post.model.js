import { Schema, model } from 'mongoose'

// user can post text, image, audio, video, document 

const postSchema = new Schema({
    textPost:{
        type: 'string',
    },
    imagePost:{
        type: 'string',
    },
    comments: [
        {
            comment:{
                type: Schema.Types.ObjectId,
                ref: 'comments'
            }
        }
    ],
    totalLikes:{
        type: 'number'
    },
    totalDislikes:{
        type: 'number'
    }

},{timestamps: true})


const Post = model('posts', postSchema)