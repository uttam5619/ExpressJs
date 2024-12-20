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
        index: true,
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
        passwordStrength: {
            validator: function(v) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: props => `${props.value} is not a strong enough password!`,
        },
    },
    countryCode:{
        type: 'string',
        required: true,
        default: '+91',
        enum: ['+91']
    },
    phoneNumber:{
        type: 'string',
        required: true,
        validateTheDigits: {
            validator: function(v) {
            // Check if the phone number has exactly 10 digits
            return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number! It must be exactly 10 digits.`
        }
    },
    gender:{
        type: 'string',
        required:'true',
        enum: ['male', 'female', 'other'],
        default: 'male'
    },
    /*
    country:[

    ],
    state:[

    ]
    */
   profilePicture:{

   },
   avatarr:{

   }

},{timestamps:true})

const User = model('user', userSchema)
module.exports = User