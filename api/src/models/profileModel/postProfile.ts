import db from '../../db/dbConnect'

export const getProfilePost = (ID: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('SELECT * FROM view_posts_with_likes WHERE user_id = ?', [ID],
            (error: any, result: any) => {
                if (error) {
                    reject(error);
                } else {
                    accept(result);
                }
            }
        )
    })

}

export const setPost = (user_id: number, content: string) => {
    return new Promise((accept, reject) => {
        db.query(
            'INSERT INTO posts (user_id, content) VALUES (?,?);',
            [user_id, content],
            (error: any, result: any) => {
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

