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

export const createGame = (game: string,
    event: string,
    first_team: string,
    seconde_team: string,
    scoreboard_first_team: number,
    scoreboard_seconde_team: number,
    date: Date) => {
    return new Promise((accept, reject) => {
        db.query(
            'INSERT INTO gamesEsport (game, event, first_team, seconde_team, scoreboard_first_team, scoreboard_seconde_team, date) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [game, event, first_team, seconde_team, scoreboard_first_team, scoreboard_seconde_team, date],
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

export const updateGame = (
    id: number,
    game: string,
    event: string,
    first_team: string,
    seconde_team: string,
    scoreboard_first_team: number,
    scoreboard_seconde_team: number,
    date: Date
) => {
    return new Promise((accept, reject) => {
        db.query(
            `UPDATE gamesEsport 
            SET game = ?, event = ?, first_team = ?, seconde_team = ?, scoreboard_first_team = ?, scoreboard_seconde_team = ?, date = ? 
            WHERE id = ?`,
            [game, event, first_team, seconde_team, scoreboard_first_team, scoreboard_seconde_team, date, id],
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

export const deleteGame = (id: string): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('delete from gamesEsport where id=?', [id],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}
