import db from '../../db/dbConnect'

export const getProfilePost = (ID: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query(`
            SELECT 
                p.id AS post_id,
                p.user_id AS post_user_id,
                p.content AS post_content,
                p.image_url,
                p.post_date,
                (SELECT COUNT(*) FROM likes l WHERE l.post_id = p.id) AS total_likes,
                c.id AS comment_id,
                commenter.username AS commenter_username,
                c.comment_user AS comment_text,
                c.date_comment
            FROM 
                profile_users pu
            LEFT JOIN 
                posts p ON p.user_id = pu.users_id
            LEFT JOIN 
                comments c ON c.post_id = p.id
            LEFT JOIN 
                profile_users commenter ON commenter.users_id = c.users_id
            WHERE 
                pu.users_id = ?
            ORDER BY 
                p.post_date DESC, c.date_comment ASC
        `, [ID], (error: any, results: any[]) => {
            if (error) {
                reject(error);
            } else {
                if (results.length === 0) {
                    return accept(null);
                }

                const postsMap = new Map<number, any>();

                results.forEach(row => {
                    if (row.post_id) {
                        if (!postsMap.has(row.post_id)) {
                            postsMap.set(row.post_id, {
                                post_id: row.post_id,
                                post_user_id: row.post_user_id,
                                post_content: row.post_content,
                                total_likes: row.total_likes,
                                comments: []
                            });
                        }

                        if (row.comment_id) {
                            postsMap.get(row.post_id).comments.push({
                                id_comment: row.comment_id,
                                username: row.commenter_username,
                                comment: row.comment_text,
                                date: row.date_comment
                            });
                        }
                    }
                });

                const response = {
                    posts: Array.from(postsMap.values())
                };

                accept(response);
            }
        });
    });
}

export const setPost = (user_id: number, content: string) => {
    return new Promise((accept, reject) => {
        db.query(
            'INSERT INTO posts (user_id, content) VALUES (?,?);',
            [user_id, content],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    accept(result);
                }
            }
        );
    });
}

export const updatePost = (ID: number, user_id: number, content: string) => {
    return new Promise((accept, reject) => {
        db.query(
            'UPDATE posts SET content = ? WHERE user_id = ? AND id = ?;',
            [content, user_id, ID],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    accept(result);
                }
            }
        );
    });
}

export const deletePost = (ID: number, user_id: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('DELETE FROM posts WHERE id = ? AND user_id = ?;', [ID, user_id],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            });
    });
}

export const getPostCommented = (ID: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query(`SELECT 
            p.id AS post_id,
            p.content AS post_content,
            p.image_url,
            p.post_date,
            pu_comment.username AS commenter_username,
            pu_comment.users_id AS commenter_user_id,
            c.comment_user AS comment_text,
            c.date_comment,
            pu_post.username AS post_author_username,
            pu_post.users_id AS post_author_user_id
        FROM 
            comments c
        INNER JOIN 
            posts p ON p.id = c.post_id
        INNER JOIN 
            profile_users pu_comment ON c.users_id = pu_comment.users_id
        INNER JOIN 
            profile_users pu_post ON p.user_id = pu_post.users_id
        WHERE 
            c.users_id = ?
        ORDER BY 
            c.date_comment DESC;
            `, [ID],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            });
    });
}

export const getPostLiked = (ID: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query(`
            SELECT 
        pu.username,
        pu.users_id AS id_user_post,
        p.id AS post_id,
        p.content AS post_content,
        p.post_date
    FROM 
        likes l
    INNER JOIN 
        posts p ON p.id = l.post_id
    INNER JOIN 
        profile_users pu ON p.user_id = pu.users_id
    WHERE 
        l.users_id = ?
    ORDER BY 
        l.date_likes DESC;;
    `, [ID],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            });
    });
}

