import { NextFunction, Request, Response } from "express";
import { handleError } from "../utils/error.handle";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken"

interface RequestExtended extends Request {
    user?: string | JwtPayload
}

export const checkJwt = (req: RequestExtended, res: Response, next: NextFunction) => {
    try {
        const jwtUser = req.headers.authorization || ''
        const jwt = jwtUser.split(' ').pop()

        const isUser = verifyToken(`${jwt}`)

        if (!isUser) {
            handleError(res, 401, "Invalid JWT.")
        } else {
            req.user = isUser
            next()
        }
    } catch (e) {
        handleError(res, 400, "Invalid session.")
    }
}