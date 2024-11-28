import { Schema, model} from 'mongoose'

const userScheam = new Schema({
    name:{
        type: 'string',
        required: true,
    },
    email:{
        type: 'string',
        required: true,
        unique: true,
        trim: true,
    },
    password:{
        type: 'string',
        required: true,
        trim: true
    },
    gender:{
        type: 'string',
        enum: ['male', 'female', 'other']
    }
},{timestamps: true})

const User = model('users', userScheam)
export default User