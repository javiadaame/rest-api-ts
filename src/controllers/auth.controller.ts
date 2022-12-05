import { Request, Response } from "express"
import { loginUser, registerUser } from "../services/auth.service"
import { handleError } from "../utils/error.handle"

export const registerController = async ({ body }: Request, res: Response) => {
    const { name, email, password } = body
    const response = await registerUser({ name, email, password })

    if (response === "USER_EXISTS") {
        handleError(res, 403, "User already exists.")
    } else {
        res.send(response)
    }
}

export const loginController = async ({ body }: Request, res: Response) => {
    const { email, password } = body
    const response = await loginUser({ email, password })

    if (response === "PASSWORD_INCORRECT") {
        handleError(res, 403, "Password incorrect.")
    } else if (response === "USER_DONT_EXISTS") {
        handleError(res, 403, "User don't exists.")
    } else {
        res.send(response)
    }
}
