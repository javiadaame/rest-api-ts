import { sign, verify } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "token10101010"

export const generateToken = (id: string) => {
    return sign({ id }, JWT_SECRET)
}

export const verifyToken = (jwt: string) => {
    return verify(jwt, JWT_SECRET)
}