import { RequestHandler } from "express";
import { sendError } from "../../helpers/resUser";

export const erroBodyComment: RequestHandler = (req, res, next) => {

    if (!req.body['comment'] || req.body['comment'].trim() === '') {
        sendError(res, `comment is required`)
        return
    }

    next();
};
