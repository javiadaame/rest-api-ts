import { response } from "express"
import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item.model"

/**
 * Get all database cars
 * @returns table - Cars
 */
export const getOrders = async () => {
    return await ItemModel.find({})
}