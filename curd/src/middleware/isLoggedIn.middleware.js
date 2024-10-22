const bcrypt = require('bcryptjs')
const User = require('../models/user.model')

const isLoggedIn = async (req, res)=>{
    const {token} = req.cookies
    console.log(`token: ${token}`)

    if(!token){
        return res.status(401).json({
            success: false,
            message:' Access denied'
        })
    }

    const decodedPayload = bcrypt.verify(token, process.env.ACCESS_SECRET_TOKEN)
    const {id} = decodedPayload
    const user = await User.findById(id)
    if(!user){
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    return user

}

module.exports = isLoggedIn