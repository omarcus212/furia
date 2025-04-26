import dotenv from 'dotenv'
dotenv.config()
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { UserJwt } from '../../interface/userJwt'
const jwtSecret = process.env.JWT_SECRET

declare global {
    namespace Express {
        interface Request {
            user?: UserJwt;
        }
    }
}

export const isLoggedin = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) {
        res.status(401).json({ error: 'Token não fornecido' });
        return;
    }

    if (!jwtSecret) {
        res.status(500).json({ error: 'JWT_SECRET não definido' });
        return;
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err || !decoded) {
            res.status(403).json({ error: 'Token inválido ou expirado' });
            return;
        }

        const { id, email, username, password } = decoded as UserJwt;
        req.user = { id, email, username, password };

        next();
    });
};
