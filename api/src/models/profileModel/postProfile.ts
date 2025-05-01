import db from '../../db/dbConnect'

export const getProfilePost = (ID: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query(`SELECT * FROM vw_user_posts_comments_likes WHERE post_user_id = ?; `, [ID], (error: any, results: any[]) => {
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
                                post_username: row.post_username,
                                post_content: row.post_content,
                                image_url: row.image_url,
                                post_date: row.post_date,
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

                const response = Array.from(postsMap.values());
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
        db.query(`select * from vw_post_comments_likes WHERE commenter_user_id =? ;`, [ID],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            });
    });
}

export const getPostLiked = (ID: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query(`SELECT * FROM vw_liked_posts WHERE user_who_liked =? ; `, [ID],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            });
    });
}

