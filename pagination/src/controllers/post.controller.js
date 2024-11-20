import Post from "../models/post.model.js";

const createPost = async(req, res)=>{

    try{
        const { title, description } = req.body
        if(!title){
            return res.status(400).json(
                {
                    success: false,
                    message: 'title is mandatory'
                }
            )
        }
        const post = await Post.create(req.body)
        if(!post){
            return res.status(400).json(
                {
                    success: false,
                    message: 'failed to create post'
                }
            )
        }
        const savedPost = await post.save()
        res.status(200).json(
            {
                success:true,
                data: savedPost
            }
        )
    }catch(err){
        console.log(err.message)
        res.status(500).json(
            {
                errorMessage: err.message,
                error:err
            }
        )
    }
    
    
}

const updatePost = async(req, res)=>{

}

const deletePost = async(req, res)=>{

}

const getPost = async(req, res)=>{

}

const getAllPosts= async(req, res)=>{

    try{
        const page = parseInt(req.query.page) || 1
        const postPerPage = 4
        const totalPosts = await Post.countDocuments()
        const totalPages = Math.ceil(totalPosts/postPerPage)

        if(page>totalPages){
            return res.status(404).json(
                {
                    success: false,
                    message: 'page not found'
                }
            )
        }
        const posts = await Post.find().skip((page-1)*postPerPage).limit(postPerPage).exec()
        return res.status(200).json(
            {
                success: true,
                page: page,
                numberOfPost: postPerPage,
                totalPosts: totalPosts,
                data: posts
            }
        )

    }catch(err){
        console.log(err.message)
        req.status(500).json(
            {
                success: false,
                message: err.message,
                error: err
            }
        )
    }
}

export {
    createPost,
    updatePost,
    deletePost,
    getPost,
    getAllPosts
}