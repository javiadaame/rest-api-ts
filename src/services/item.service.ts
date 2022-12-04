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

const updateCar = () => {

}

/**
 * Insert new car into database
 * @param item interface - Item data
 * @returns item
 */
const insertCar = async (item: Car) => {
    return await ItemModel.create(item)
}

const deleteCar = () => {

}

export { insertCar, getCars, getCar }