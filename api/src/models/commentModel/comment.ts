import db from '../../db/dbConnect'


export const getComment = (post_id: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('SELECT c.*, p.username FROM comments AS c inner join profile_users AS p ON c.users_id = p.users_id WHERE c.id = ?', [post_id],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}

export const setComment = (post_id: number, user_id: number, comment_user: string): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('INSERT INTO comments (post_id, users_id, comment_user) VALUES (?, ?, ?);', [post_id, user_id, comment_user],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}

export const deleteComment = (post_id: number, user_id: number, id_commit: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('DELETE FROM comments WHERE post_id = ? AND users_id = ? AND id = ?;', [post_id, user_id, id_commit],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}
