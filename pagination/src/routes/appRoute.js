import express from 'express'
import { createPost, getAllPosts, } from '../controllers/post.controller.js'

const appRoutes = express.Router()

appRoutes.post('/app/v1/post', createPost)
appRoutes.get(`/app/v1/post`, getAllPosts)


export default appRoutes