import { Request, Response } from 'express'
import { sendError, sendSuccess } from '../../helpers/resUser'

const likeModel = require('../../models/likeModel/like')

export const setLike = async (req: Request, res: Response) => {

    try {
        const ID = req.params.post_id
        const data = await likeModel.setLiked(ID, req.user?.id)
        if (data) {
            return sendSuccess(res, 'Post liked', data);
        } else {
            return sendError(res, 'Unable to like this post');
        }

    } catch (error) {
        return sendError(res, 'Unable to like this post', error);

    }
}