import db from '../../db/dbConnect'

export const getFeed = (): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query(`SELECT 
    p.id AS post_id,
    p.content AS post_content,
    p.post_date,
    pu.username AS post_author_username,
    (SELECT COUNT(*) FROM likes l WHERE l.post_id = p.id) AS total_likes
    FROM 
        posts p
    INNER JOIN 
        profile_users pu ON pu.users_id = p.user_id
    ORDER BY 
        p.post_date DESC;`,
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}
