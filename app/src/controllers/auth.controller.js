import { User } from "../models/user.model"



const signUp =async (req, res)=>{

    const { name, email, password } = req.body
    if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            message: "all fields are mandatory"
        })
    }
    const getTheUser = await User.findOne({email})
    if (getTheUser){
        return res.status(400).json(
            {
                success: false,
                message: 'an user already exists with same email'
            }
        )
    }
    const user =await User.create({name, email, password})
    if(!user){
        return res.status(400).json(
            {
                success: false,
                message: 'failed to create user'
            }
        )
    }
    res.status(200).json(
        {
            success: false,
            message: 'user created successfully'
        }
    )
}

const signIn = async (req, res)=>{

}

const signOut = async (req, res)=>{

}


export {
    signUp,
    signIn,
    signOut
}