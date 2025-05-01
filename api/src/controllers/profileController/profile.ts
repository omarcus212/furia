import { Request, Response } from 'express'
import { sendError, sendSuccess } from '../../helpers/resUser';
import { Profile } from 'interface/profile';

const profileModel = require('../../models/profileModel/profile')
const postModel = require('../../models/profileModel/postProfile')

export const getProfile = async (req: Request, res: Response) => {

    try {
        const username = req.params.user_name
        const data = await profileModel.getProfile(username);
        return sendSuccess(res, 'Profile found!', data)
    } catch (error) {
        return sendError(res, 'Profile not found!', error)
    }

}

export const getMyProfile = async (req: Request, res: Response) => {

    try {
        const data = await profileModel.getProfile(req.user?.username);
        return sendSuccess(res, 'Profile found!', data)
    } catch (error) {
        return sendError(res, 'Profile not found!', error)
    }

}

export const getPostLiked = async (req: Request, res: Response) => {

    try {
        const ID = req.user?.id
        const data = await postModel.getPostLiked(ID);
        return sendSuccess(res, 'Profile found!', data)
    } catch (error) {
        return sendError(res, 'Profile not found!', error)
    }

}

export const getPostCommented = async (req: Request, res: Response) => {

    try {
        const ID = req.user?.id
        const data = await postModel.getPostCommented(ID);
        return sendSuccess(res, 'Profile found!', data)
    } catch (error) {
        return sendError(res, 'Profile not found!', error)
    }

}

export const updateProfile = async (req: Request<Profile>, res: Response) => {

    try {
        const ID = req.user?.id
        const profileData = await profileModel.updateProfile(ID, req.body)
        return sendSuccess(res, 'Profile updated successfully!', profileData)
    } catch (error) {
        return sendError(res, 'Profile not updated!', error)
    }
}

export const deleteProfile = async (req: Request, res: Response) => {

    try {
        const ID = req.user?.id
        const profileData = await profileModel.deleteProfile(ID)
        return sendSuccess(res, 'Profile deleted successfully!')
    } catch (error) {
        return sendError(res, 'Profile not deleted!', error)
    }
}