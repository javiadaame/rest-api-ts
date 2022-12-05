import { Request, Response } from "express"
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/item.service"
import { handleError, handleHttp } from "../utils/error.handle"

/**
 * Get specific item
 * @param params Request
 * @param res Response
 */
export const getItem = async ({ params }: Request, res: Response) => {
    const { id } = params
    const response = await getCar(id)
    const data = response ? response : handleError(res, 404, 'NOT_FOUND')

    res.send(data)
}

/**
 * Get all items
 * @param req Request
 * @param res Response
 */
export const getItems = async (req: Request, res: Response) => {
    const response = await getCars()

    res.send(response)
}

/**
 * Update specific item
 * @param req Request
 * @param res Response
 */
export const updateItem = async ({ params, body }: Request, res: Response) => {
    const { id } = params
    const response = await updateCar(id, body)

    res.send(response)
}

/**
 * Crate new item
 * @param body Request 
 * @param res Response
 */
export const postItem = async ({ body }: Request, res: Response) => {
    const responseItem = await insertCar(body)

    res.send(responseItem)
}

/**
 * Delete specific item
 * @param req Request
 * @param res Response
 */
export const deleteItem = async ({ params }: Request, res: Response) => {
    const { id } = params
    const response = await deleteCar(id)

    res.send(response)
}
