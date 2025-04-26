import { Request, Response } from 'express'
import { sendError, sendSuccess } from '../../helpers/resUser';
import { Game } from 'interface/game';
const playModel = require('../../models/playModel/play')

export const getPlayGames = async (req: Request, res: Response) => {

    try {
        const data = await playModel.getPlayGames();

        if (data.length === 0) {

            return sendError(res, 'Games not found!', data)

        } else {

            return sendSuccess(res, "Games found", data);
        }

    } catch (error) {
        return sendError(res, "Error searching for Games.", error);

    }
}

export const sendPlayGames = async (req: Request<Game>, res: Response) => {
    const { game,
        event,
        first_team,
        seconde_team,
        scoreboard_first_team,
        scoreboard_seconde_team,
        date } = req.body

    const gamesEsport = await playModel.createGame(game, event, first_team, seconde_team, scoreboard_first_team, scoreboard_seconde_team, date)
    return sendSuccess(res, 'Game registered successfully', gamesEsport)
}

export const updatePlayGames = async (req: Request<Game>, res: Response) => {

    const ID = req.params.id
    const { game,
        event,
        first_team,
        seconde_team,
        scoreboard_first_team,
        scoreboard_seconde_team,
        date } = req.body

    const gamesEsport = await playModel.updateGame(ID, game, event, first_team, seconde_team, scoreboard_first_team, scoreboard_seconde_team, date)
    return sendSuccess(res, 'Game upated successfully', gamesEsport)

}

export const deletePlayGames = async (req: Request, res: Response) => {

    const ID = req.params.id
    const gamesEsport = await playModel.deleteGame(ID)
    return sendSuccess(res, 'Game deleted successfully')

}