import { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

export const registerUser = async ({ name, email, password }: User) => {
    const checkIs = await UserModel.findOne({ email })
    if (checkIs) return "USER_EXISTS"

    const passHash = await encrypt(password)

    return UserModel.create({ name, email, password: passHash })
}

export const loginUser = async ({ email, password }: User) => {
    const checkIs = await UserModel.findOne({ email })
    if (!checkIs) return "USER_DONT_EXISTS"

    const passHash = checkIs.password // Encrypt from database
    const isCorrect = await verified(password, passHash)

    if (!isCorrect) return "PASSWORD_INCORRECT"

    const token = generateToken(checkIs._id.toString())
    const data = {
        token,
        user: checkIs
    }

    return data
}