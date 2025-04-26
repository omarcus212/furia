import { Game } from 'interface/game'
import db from '../../db/dbConnect'


export const getPlayGames = (): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('select * from gamesEsport',
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}

export const createGame = (game: Game) => {
    return new Promise((accept, reject) => {
        db.query(
            'INSERT INTO gamesEsport (game, event, first_team, seconde_team, scoreboard_first_team, scoreboard_seconde_team, date) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [game.game, game.event, game.first_team, game.seconde_team, game.scoreboard_first_team, game.scoreboard_seconde_team, game.date],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    accept(result);
                }
            }
        );
    });
};

export const updateGame = (ID: string, game: Game) => {
    return new Promise((accept, reject) => {
        db.query(
            `UPDATE gamesEsport 
            SET game = ?, event = ?, first_team = ?, seconde_team = ?, scoreboard_first_team = ?, scoreboard_seconde_team = ?, date = ? 
            WHERE id = ?`,
            [game.game, game.event, game.first_team, game.seconde_team, game.scoreboard_first_team, game.scoreboard_seconde_team, game.date, ID],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    accept(result);
                }
            }
        );
    });
};

export const deleteGame = (ID: string): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('delete from gamesEsport where id=?', [ID],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}
