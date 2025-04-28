import { Request, Response } from 'express'
import { sendError, sendSuccess } from '../../helpers/resUser'

const suggestionModel = require('../../models/suggestionModel/suggestion')


export const getSuggestion = async (req: Request, res: Response) => {

    try {
        const ID = req.params.post_id
        const data = await suggestionModel.getsuggestion()
        return sendSuccess(res, 'Res suggestion', data);

    } catch (error) {
        return sendError(res, 'Not have suggestionS', error);

    }
}

export const setSuggestion = async (req: Request, res: Response) => {

    try {
        const data = await suggestionModel.setsuggestion(req.user?.id, req.body['text'])
        if (data) {
            return sendSuccess(res, 'Post suggestion', data);
        } else {
            return sendError(res, 'Unable to suggestion this post');
        }

    } catch (error) {
        return sendError(res, 'Unable to suggestion this post', error);

    }
}

export const deleteSuggestion = async (req: Request, res: Response) => {

    try {
        const ID = req.params.post_id
        const data = await suggestionModel.deletesuggestion(ID)
        if (data) {
            return sendSuccess(res, 'suggestion deleted', data);
        } else {
            return sendError(res, 'Unable to deleted this suggestion');
        }

    } catch (error) {
        return sendError(res, 'Unable to deleted this suggestion', error);

    }
}
