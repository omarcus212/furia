import { Request, Response } from 'express'
import { sendError, sendSuccess } from '../../helpers/resUser';
import { Post } from 'interface/post';

const postModel = require('../../models/profileModel/postProfile')

export const getPost = async (req: Request, res: Response) => {

    try {
        const ID = req.params.id
        const data = await postModel.getProfilePost(ID);
        return sendSuccess(res, 'Posts founds!', data)
    } catch (error) {
        return sendError(res, 'Post not found!', error)
    }

}

export const setPost = async (req: Request<Post>, res: Response) => {

    try {
        const dataPost = await postModel.setPost(req.user?.id, req.body['content'])
        return sendSuccess(res, 'Post create!', dataPost)
    } catch (error) {
        return sendError(res, 'Post not create!', error)
    }

}

export const updatePost = async (req: Request<Post>, res: Response) => {

    try {

        const ID = req.params.post_id
        const data = await postModel.updatePost(ID, req.user?.id, req.body['content'])
        return sendSuccess(res, 'Post updated!', data)

    } catch (error) {
        return sendError(res, 'Unable to update this post', error)
    }
}

export const deletePost = async (req: Request, res: Response) => {

    try {
        const ID = req.params.id_post
        const profileData = await postModel.deletePost(ID, req.user?.id)
        return sendSuccess(res, 'Post deleted successfully!', profileData)
    } catch (error) {
        return sendError(res, 'Unable to deleted this post', error)
    }
}