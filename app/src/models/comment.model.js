import { Schema, model} from 'mongoose'

const commentSchema = new Schema({
    
    commentedBy:{
        type: Schema.Types.ObjectId,
        ref:'users'
    },
    commentedOn:{
        type: Schema.Types.ObjectId,
        ref: 'posts'
    },
    textComment:{
        type: String,
    },
    imageComment:{
        type: String,
        required: false,
    },
    reply:[
        {
            reply:{
                type: Schema.Types.ObjectId,
                ref: 'replies'
            }
        }
    ]


})

const Comment = model('comments', commentSchema)