export interface Post {
    post_id?: number;
    post_content: string;
}

export interface Comment {
    username: string;
    comment: string;
    date: Date;
}

