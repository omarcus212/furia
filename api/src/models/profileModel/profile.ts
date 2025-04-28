import { Profile } from 'interface/profile'
import db from '../../db/dbConnect'

export const getProfile = (ID: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('SELECT * from profile_users where id = ?', [ID],
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

export const updateProfile = (ID: number, profile: Profile) => {
    return new Promise((accept, reject) => {
        db.query(
            'UPDATE profile_users SET username = ?, bio = ?, profile_photo_url = ? WHERE users_id = ?',
            [profile.username, profile.bio, profile.photo, ID],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    db.query(
                        'UPDATE users_registers SET username = ? WHERE id = ?',
                        [profile.username, ID],
                        (error2, result2) => {
                            if (error2) {
                                reject(error2);
                            } else {
                                accept({ profileUpdate: result, registerUpdate: result2 });
                            }
                        }
                    );
                }
            }
        );
    });
}

export const deleteProfile = (ID: number): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('UPDATE profile_users SET active = 0 where users_id=?', [ID],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            });
    });
}
