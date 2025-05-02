import dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendError, sendSuccess } from '../../helpers/resUser'
import { UserLogin, UserRegister } from '../../interface/users'

const userModel = require('../../models/usersLogin/user')
const profileModel = require('../../models/profileModel/profile')
const key_jwt = process.env.JWT_SECRET
const img = 'https://firebasestorage.googleapis.com/v0/b/callofduty-ed1bf.appspot.com/o/nopicture.jpg?alt=media&token=48da8902-b944-4238-8c10-b440b6b1ba47'

export const login = async (req: Request<UserLogin>, res: Response): Promise<Response> => {

    const { email, password } = req.body

    const userID = await userModel.getUserID(email)

    if (!key_jwt) {
        return sendError(res, 'JWT_SECRET not set');
    }

    if (!userID[0]) {
        return sendError(res, 'User not found');
    }
    const isMatch = await bcrypt.compare(password, userID[0].password);

    if (isMatch) {

        const userPayload = {
            id: userID[0].id,
            email: userID[0].email,
            username: userID[0].username
        };

        const token = jwt.sign(
            userPayload,
            key_jwt,
            { expiresIn: '7d' }
        );

        return sendSuccess(res, token)

    } else {

        return sendError(res, 'Incorrect password!',)
    }

}

export const register = async (req: Request, res: Response): Promise<Response> => {
    const saltRounds = 5;
    try {
        const passHash = await bcrypt.hash(req.body['password'], saltRounds)
        const data = await userModel.setRegister(req.body, passHash)
        const profile = await profileModel.setProfile(data[0].id, data[0].username, img)
        return sendSuccess(res, 'User registered successfully', data)
    } catch (error) {
        return sendError(res, 'user cannot be registered', error)
    }


}

export const getRegister = async (req: Request, res: Response<UserRegister>): Promise<Response> => {

    try {
        const data = await userModel.getRegister();

        if (data.length === 0) {

            return sendError(res, 'User not found!', data)

        } else {

            return sendSuccess(res, "Users found", data);
        }

    } catch (error) {
        return sendError(res, "Error searching for users.", error);

    }
}

