import express from 'express'
import { createPost, updatePost, getAllPosts, getPost, deletePost } from '../controllers/post.controller.js'
import { updateUser, getAllUsers, getUser, deleteUser } from '../controllers/user.controller.js'
import { comment, dislike, getComments, getReplies, like, replies } from '../controllers/feeds.controller.js'
import { follow, unfollow } from '../controllers/followAndUnfollow.controller.js'

const routes = express.Router()

routes.post('/v1/posts', createPost)
routes.put('/v1/posts', updatePost)
routes.get('/v1/posts', getAllPosts)
routes.get('/v1/posts/:postId',getPost)
routes.delete('/v1/posts/:postId',deletePost)

routes.put('/v1/users', updateUser)
routes.get('/v1/users', getAllUsers)
routes.get('/v1/users/:userId', getUser)
routes.delete('/v1/users/:userId', deleteUser)

routes.post('/v1/posts/comment', comment)
routes.get('/v1/posts/comment', getComments)
routes.post('/v1/posts/comment/replies', replies)
routes.get('/v1/posts/comment/replies', getReplies)
routes.post('/v1/posts/likes', like)
routes.post('/v1/posts/disliks', dislike)

routes.post('/v1/posts/follow', follow)
routes.post('/v1/posts/unfollow', unfollow)



export default routes