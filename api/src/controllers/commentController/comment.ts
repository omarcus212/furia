import { Request, Response } from 'express'
import { sendError, sendSuccess } from '../../helpers/resUser'

const commentModel = require('../../models/commentModel/comment')


export const getComment = async (req: Request, res: Response) => {

    try {
        const ID = req.params.post_id
        const data = await commentModel.getComment(ID)
        return sendSuccess(res, 'Res comment', data);

    } catch (error) {
        return sendError(res, 'Not have comment', error);

    }
}

export const setComment = async (req: Request, res: Response) => {

    try {
        const ID = req.params.post_id
        const data = await commentModel.setComment(ID, req.user?.id, req.body['comment'])
        if (data) {
            return sendSuccess(res, 'Post Commented', data);
        } else {
            return sendError(res, 'Unable to Commented this post');
        }

    } catch (error) {
        return sendError(res, 'Unable to Commented this post', error);

    }
}

export const deleteComment = async (req: Request, res: Response) => {

    try {
        const ID = req.params.post_id
        const data = await commentModel.deleteComment(ID, req.user?.id, req.body['id_commit'])
        if (data) {
            return sendSuccess(res, 'Comment deleted', data);
        } else {
            return sendError(res, 'Unable to deleted this Commented');
        }

    } catch (error) {
        return sendError(res, 'Unable to deleted this Commented', error);

    }
}
