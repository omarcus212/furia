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

            return sendSuccess(res, "Games found!", data);
        }

    } catch (error) {
        return sendError(res, "Error searching for Games!", error);

    }
}

export const sendPlayGames = async (req: Request<Game>, res: Response) => {

    try {
        const gamesEsport = await playModel.createGame(req.body)
        return sendSuccess(res, 'Game registered successfully!', gamesEsport)
    } catch (error) {
        return sendError(res, 'Game not registered!')
    }

}

export const updatePlayGames = async (req: Request<Game>, res: Response) => {
    try {
        const ID = req.params.id
        const gamesEsport = await playModel.updateGame(ID, req.body)
        return sendSuccess(res, 'Game updated successfully!', gamesEsport)
    } catch (error) {
        return sendError(res, 'Game not updated!')
    }
}

export const deletePlayGames = async (req: Request, res: Response) => {

    try {
        const ID = req.params.id
        const gamesEsport = await playModel.deleteGame(ID)
        return sendSuccess(res, 'Game deleted successfully!')
    } catch (error) {
        return sendError(res, 'Game not deleted!')
    }

}