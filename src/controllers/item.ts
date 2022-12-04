import { Request, Response } from "express"
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/item.service"
import { handleHttp } from "../utils/error.handle"

/**
 * Get specific item
 * @param params Request
 * @param res Response
 */
const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await getCar(id)
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

/**
 * Get all items
 * @param req Request
 * @param res Response
 */
const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars()
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

/**
 * Update specific item
 * @param req Request
 * @param res Response
 */
const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await updateCar(id, body)
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}

/**
 * Crate new item
 * @param body Request 
 * @param res Response
 */
const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
}

/**
 * Delete specific item
 * @param req Request
 * @param res Response
 */
const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await deleteCar(id)
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem }