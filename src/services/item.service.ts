import { response } from "express"
import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item.model"

/**
 * Get specific database car
 * @param id number - Id of the car (_id)
 * @returns table - Specific car
 */
const getCar = async (id: string) => {
    return await ItemModel.findOne({ _id: id })
}

/**
 * Get all database cars
 * @returns table - Cars
 */
const getCars = async () => {
    return await ItemModel.find({})
}

/**
 * Update specific database car
 * @param id number - Id of the car (_id)
 * @param data interface - Item data
 * @returns table - Specific car
 */
const updateCar = async (id: string, data: Car) => {
    return await ItemModel.findOneAndUpdate(
        { _id: id },
        data,
        { new: true })
}

/**
 * Insert new car into database
 * @param item interface - Item data
 * @returns table - Car
 */
const insertCar = async (item: Car) => {
    return await ItemModel.create(item)
}

/**
 * Remove specific database car 
 * @param id number - Id of the car (_id)
 */
const deleteCar = async (id: string) => {
    return await ItemModel.remove({ _id: id })
}

export { insertCar, getCars, getCar, updateCar, deleteCar }