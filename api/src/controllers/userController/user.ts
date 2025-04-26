import dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendError, sendSuccess } from '../../helpers/resUser'
import { UserLogin, UserRegister } from '../../interface/users'

const userModel = require('../../models/usersLogin/user')
const key_jwt = process.env.JWT_SECRET

export const login = async (req: Request<UserLogin>, res: Response): Promise<Response> => {

    const { email, password } = req.body

    const userID = await userModel.getUserID(email)

    if (!key_jwt) {
        return sendError(res, 'JWT_SECRET not set');
    }

    if (!userID) {
        return sendError(res, 'User not found');
    }

    const isMatch = await bcrypt.compare(password, userID[0].password);

    if (isMatch) {

        const userPayload = {
            id: userID[0].id,
            email: userID[0].email,
            username: userID[0].username,
            password: userID[0].password,
        };

        const token = jwt.sign(
            userPayload,
            key_jwt,
            { expiresIn: '24h' }
        );

        return sendSuccess(res, token)

    } else {

        return sendError(res, 'Incorrect password!',)
    }

}


export const register = async (req: Request, res: Response): Promise<Response> => {

    const { username, email, password } = req.body
    const saltRounds = 5;
    const passHash = await bcrypt.hash(password, saltRounds)
    const data = await userModel.setRegister(username, email, passHash)
    return sendSuccess(res, 'User registered successfully', data)

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

export const getProfile = (req: Request, res: Response) => {
    if (!req.user) {
        return sendError(res, 'Unauthorized');
    }
    const { id, email, username } = req.user;

    return sendSuccess(res, 'User found', { id, email, username });
};
