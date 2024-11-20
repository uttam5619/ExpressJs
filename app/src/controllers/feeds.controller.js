

const like =(req, res)=>{

    // take the id of post from the params
    // serach the post by id and add the like to the post model.

}

const dislike =(req, res)=>{

    // take the id of post from the params
    // serach the post by id and add the like to the post model.

}

const comment = (req,res)=>{

    // take the post id from the params
    // the the comment from the request body 
    // search and get the post
    // add the comment in the comment list of the post.
}

const getComments = (req,res)=>{

}

const replies = (req,res)=>{
    // take the comment id from the 
}

const getReplies = (req,res)=>{

}

const feedOnHome = (req,res)=>{

    // take the id of user from req body and serach for the user.
    // after getting the user instance get the list of following.
    // show the post of following person as well as his own post.

}


export {
    like,          
    dislike,
    comment,
    getComments,
    replies,
    getReplies,
    feednHome
}