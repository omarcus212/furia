import { RequestHandler } from "express";
import { sendError } from "../../helpers/resUser";

export const erroBodyProfile: RequestHandler = (req, res, next) => {
    const reqField = ['username', 'users_id'];

    for (const field of reqField) {
        if (!req.body[field] || req.body[field].trim() === '') {
            sendError(res, `${field} is required`)
            return
        }
    }

    next();
};
