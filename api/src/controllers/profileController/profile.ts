import { Request, Response } from 'express'
import { sendError, sendSuccess } from '../../helpers/resUser';
import { Profile } from 'interface/profile';

const profileModel = require('../../models/profileModel/profile')

export const getProfile = async (req: Request, res: Response) => {

    try {
        const ID = req.params.id
        const data = await profileModel.getProfile(ID);
        return sendSuccess(res, 'Profile found!', data)
    } catch (error) {
        return sendError(res, 'Profile not found!', error)
    }


}

export const updateProfile = async (req: Request<Profile>, res: Response) => {

    try {
        const ID = req.params.users_id
        const gamesEsport = await profileModel.updateProfile(req.body)
        return sendSuccess(res, 'Profile updated successfully!', gamesEsport)
    } catch (error) {
        return sendError(res, 'Profile not updated!', error)
    }
}

export const deleteProfile = async (req: Request, res: Response) => {

    try {
        const ID = req.params.id
        const gamesEsport = await profileModel.deleteProfile(ID)
        return sendSuccess(res, 'Profile deleted successfully!')
    } catch (error) {
        return sendError(res, 'Profile not deleted!', error)
    }
}