import { RequestHandler } from 'express';
import { sendError } from '../../helpers/resUser';

export const erroBodyGame: RequestHandler = (req, res, next) => {
    const reqField = ['game', 'event', 'first_team', 'seconde_team', 'scoreboard_first_team', 'scoreboard_seconde_team', 'date'];

    for (const field of reqField) {
        if (!req.body[field] || req.body[field].trim() === '') {
            sendError(res, `${field} is required`)
            return
        }

        if (field === 'date') {
            const dateValue = new Date(req.body[field]);
            if (isNaN(dateValue.getTime())) {
                sendError(res, 'Invalid date format');
                return;
            }
        }
    }

    next();
};
