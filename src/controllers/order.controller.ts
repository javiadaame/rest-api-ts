import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { JwtPayload } from "jsonwebtoken"

interface RequestExtended extends Request {
    user?: string | JwtPayload
}

/**
 * Get all orders
 * @param req RequestExtended
 * @param res Response
 */
export const getOrders = async (req: RequestExtended, res: Response) => {
    try {
        res.send({
            data: "Only logged users can access.",
            user: req.user
        })
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}
