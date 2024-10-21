const { Schema, model } =require('mongoose')

const userSchema = new Schema({
    name:{
        type: 'string',
        required: true,
        lowercase: true,
        trim: true,
        maxLength: [120`the name should not contain more than 120 characters`]
    },
    username:{
        type: 'string',
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        maxlength:[120, `the username should not contain more than 120 characters`]
    },
    email:{
        type: 'string',
        trim: true,
        required: true,
        maxlength: [120, `the email shoould not contain more than 120 characters`]
    },
    password:{
        type: 'string',
        required: true,
        minLength:[8,`passwor dshould contain at least 8 characters`],
        maxlength: [200, `the password should not contain more than 200 characters`],
        match: [
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
        ],
        validate: {
            validator: function(v) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: props => `${props.value} is not a strong enough password!`,
        },
    },
    gender:{
        type: 'string',
        enum: ['male', 'female', 'other']
    },
    /*
    country:[

    ],
    state:[

    ]
    */

},{timestamps:true})