const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title: {
        type: 'string',
        lowercase: true,
        trim: true,
        maxLength: [100,`the title should contain at max 100 words`]
    },
    description:{
        type: 'string',
        required: true,
        lowercase: true,
    },
    status:{
        type: 'boolean',
        default: false,
        enum:['true', 'false'],
        required: true,
    },
    subTodo:[
        {
            title: {
                type:String,
                trim:true,
                lowercase:true,
                maxLength: [100,`the title should contain at max 100 words`]
            },
            description:{
                type: String,
                lowercase: true,
            },
            status:{
                type: 'boolean',
                default: false,
                enum: ['true', 'false']
            }
        }
    ]
},{timestamps: true})

const Todo = model('todo', todoSchema);
module.exports = Todo;
