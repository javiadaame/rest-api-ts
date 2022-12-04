import { Response } from "express";

/**
 * Show Error
 * @param res Response
 * @param error string - The error
 */
const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw)
    res.status(500).send({ error })
}

export { handleHttp }