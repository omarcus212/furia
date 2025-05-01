export interface Profile {
    id?: number,
    users_id?: number,
    username: string,
    bio?: string
    profile_photo_url?: string,
    onClickEdit?: () => void
}