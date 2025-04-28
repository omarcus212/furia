import db from '../../db/dbConnect'

export const setLiked = (post_id: number, user_id: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('INSERT INTO likes (post_id, users_id) VALUES (?, ?);', [post_id, user_id],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}
