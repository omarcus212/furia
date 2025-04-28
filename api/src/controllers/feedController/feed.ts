import { Request, Response } from 'express'
import { sendError, sendSuccess } from '../../helpers/resUser'

const feedModel = require('../../models/feedModel/feed')

export const getFeed = async (req: Request, res: Response) => {

    try {
        const data = await feedModel.getFeed();

        if (data.length === 0) {

            return sendError(res, 'Error feed', data)

        } else {

            return sendSuccess(res, 'feed found!', data);
        }

    } catch (error) {
        return sendError(res, 'Error searching!', error);

    }
}