export interface IPost {
    id: number,
    post_id: number,
    username: string,
    post_username?: number,
    content: string,
    post_content: string,
    total_likes: number
};

export interface IPostComment {
    post_id: number,
    post_content: string,
    post_date: string,
    commenter_username: string,
    commenter_user_id: number,
    comment_text: string,
    date_comment: string,
    post_author_username: string,
    post_author_user_id: number,
}


export interface PostComment {
    id: number;
    post_id: number;
    users_id: number;
    comment_user: string;
    date_comment: string;
    username: string;
}