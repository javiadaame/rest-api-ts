import { Response } from "express";

const handleHttp = (res: Response, error: string) => {
    res.status(500).send({ error })
}

export { handleHttp }