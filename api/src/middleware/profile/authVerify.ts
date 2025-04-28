import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import { UserJwt } from 'interface/userJwt';
const jwtSecret = process.env.JWT_SECRET!

declare global {
    namespace Express {
        interface Request {
            user?: UserJwt;
        }
    }
}

export const verifyPostOwnership: RequestHandler = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({ message: 'Token não fornecido' });
        return
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, jwtSecret, (error, decoded: any) => {
        if (error) {
            res.status(401).json({ message: 'Token inválido' })
            return
        }

        const { id, email, username, password } = decoded;
        req.user = { id, email, username, password };
        next();

    });
};
