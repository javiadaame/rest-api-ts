import { hash, compare } from "bcryptjs"

export const encrypt = async (pass: string) => {
    return await hash(pass, 8)
}

/**
 * 
 * @param pass 
 * @param passHash 
 * @return boolean - Password verifier 
 */
export const verified = async (pass: string, passHash: string) => {
    return await compare(pass, passHash)
}