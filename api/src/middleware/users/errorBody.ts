import { RequestHandler } from 'express';
import { sendError } from '../../helpers/resUser';

export const erroBodyRegister: RequestHandler = (req, res, next) => {
    const reqField = ['username', 'email', 'password'];

    for (const field of reqField) {
        if (!req.body[field] || req.body[field].trim() === '') {
            sendError(res, `${field} is required`)
            return
        }
    }

    next();
};

export const erroBodyLogin: RequestHandler = (req, res, next) => {
    const reqField = ['email', 'password'];

    for (const field of reqField) {
        if (!req.body[field] || req.body[field].trim() === '') {
            sendError(res, `${field} is required`)
            return
        }
    }

    next();
};