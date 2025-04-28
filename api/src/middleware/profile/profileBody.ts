import { RequestHandler } from "express";
import { sendError } from "../../helpers/resUser";

export const erroBodyProfile: RequestHandler = (req, res, next) => {
    const reqField = ['username'];

    for (const field of reqField) {
        if (!req.body[field] || req.body[field].trim() === '') {
            sendError(res, `${field} is required`)
            return
        }
    }

    next();
};


export const erroBodyPostProfile: RequestHandler = (req, res, next) => {
    const reqField = ['content'];

    for (const field of reqField) {
        if (!req.body[field] || req.body[field].trim() === '') {
            sendError(res, `${field} is required`)
            return
        }
    }

    next();
};