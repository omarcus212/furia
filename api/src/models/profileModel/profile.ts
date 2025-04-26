import { Profile } from 'interface/profile'
import db from '../../db/dbConnect'

export const getProfile = (ID: number): Promise<any> => {
    console.log(ID)
    return new Promise((accept, reject) => {
        db.query('select * from profile_users where id=?', [ID],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            });
    });
}

export const setProfile = (users_id: number, username: string) => {
    return new Promise((accept, reject) => {
        db.query(
            'INSERT INTO profile_users (users_id, username) VALUES (?,?);',
            [users_id, username],
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

export const updateProfile = (profile: Profile,) => {
    return new Promise((accept, reject) => {
        db.query(
            'UPDATE profile_users SET username = ?, bio = ?, profile_photo_url = ? WHERE users_id = ?',
            [profile.username, profile.bio, profile.photo, profile.users_id],
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

export const deleteProfile = (ID: string): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('delete from profile_users where users_id=?', [ID],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            });
    });
}
