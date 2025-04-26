import { Response } from 'express'
import { ResponseData } from '../interface/response'

export const sendSuccess = (res: Response, message: string, data?: string | object, status: number = 200): Response<ResponseData> => {

    return res.status(status).json({
        status: 'success',
        message,
        data
    })
}

export const sendError = (res: Response, message: string, error?: any, status: number = 400): Response<ResponseData> => {

    return res.status(status).json({
        status: 'error',
        message,
        error
    })
}