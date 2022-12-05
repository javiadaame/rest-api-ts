import { Router } from "express"
import { getOrders } from "../controllers/order.controller"
import { checkJwt } from "../middlewares/session.middleware"

/**
 * This route only can be visited by logged users.
 */
export const router = Router()

router.get("/", checkJwt, getOrders)

