import { UserRegister } from 'interface/users'
import db from '../../db/dbConnect'


export const getRegister = (): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('select * from users_registers',
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}

export const getUserID = (email: string): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('select * from users_registers where email=?', [email],
            (error: any, result: any) => {
                if (error) { reject(error) }
                accept(result)
            })
    })
}

export const setRegister = (user: UserRegister, passHash: string): Promise<any> => {
    return new Promise((accept, reject) => {
        db.query('insert into users_registers (username, email, password) values (?,?,?)',
            [user.username, user.email, passHash], (error: any, result: any) => {
                if (error) {
                    reject(error)
                }
                else {

                    db.query('select * from users_registers where id=?', [result.insertId],
                        (error: any, selectResult: any) => {
                            if (error) { reject(error) }
                            accept(selectResult)
                        })
                }

            })
    })
}
