import db from '../../db/dbConnect'

export const getFeed = (): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query(`SELECT 
    p.id AS post_id,
    p.content AS post_content,
    p.image_url,
    p.post_date,
    pu.username AS post_author_username,
    (SELECT COUNT(*) FROM likes l WHERE l.post_id = p.id) AS total_likes,
    c.id AS comment_id,
    commenter.username AS commenter_username,
    c.comment_user AS comment_text,
    c.date_comment
FROM 
    posts p
INNER JOIN 
    profile_users pu ON pu.users_id = p.user_id
LEFT JOIN 
    comments c ON c.post_id = p.id
LEFT JOIN 
    profile_users commenter ON commenter.users_id = c.users_id
ORDER BY 
    p.post_date DESC, c.date_comment ASC;`,
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}
