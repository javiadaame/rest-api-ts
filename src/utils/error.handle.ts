import { Response } from "express";

/**
 * Show Error
 * @param res Response
 * @param error string - The error
 */
export const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw)
    res.status(500).send({ error })
}

export const handleError = (res: Response, errorCode: number, message: string) => {
    res.status(errorCode).send(message)
}