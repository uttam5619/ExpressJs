import { Schema, model } from 'mongoose';


const userSchema = new Schema({

    name:{
        type: 'string',
        required: true,
    },
    email:{
        type: 'string',
        required: true,
        unique: true,
    },
    password:{
        type: 'string',
        required: true,
    },
    followers:[
        {
            follower:{
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    followings:[
        {
            following:{
                type: Schema.Types.ObjectId,
                ref:'users'
            }
        }
    ]

},{timestamps: true})

export const User = model('users', userSchema);
