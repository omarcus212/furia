import { RequestHandler } from "express";
import { sendError } from "../../helpers/resUser";

export const erroBodySuggestion: RequestHandler = (req, res, next) => {

    if (!req.body['text'] || req.body['text'].trim() === '') {
        sendError(res, `text is required`)
        return
    }

    next();
};
