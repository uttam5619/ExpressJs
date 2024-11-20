import { Schema, model } from 'mongoose';

const replySchema = new Schema({

    repliedBy:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    repliedTo:{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    },
    textReply:{
        type:'string'
    },
    imageReply:{
        type: 'sting'
    },
    replies:[
        {
            type: Schema.Types.ObjectId,
            ref: 'replies'
        }
    ]

})


const Reply = model('replies', replySchema);
export default Reply