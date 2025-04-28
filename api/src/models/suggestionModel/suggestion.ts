import db from '../../db/dbConnect'

export const getsuggestion = (): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('SELECT * FROM suggestion;',
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}

export const setsuggestion = (user_id: number, text: string): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('INSERT INTO suggestion (user_id, text) VALUES (?, ?);', [user_id, text],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}

export const deletesuggestion = (suggestion_id: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('DELETE FROM suggestion WHERE id = ?;', [suggestion_id],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}
