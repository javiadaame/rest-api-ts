import { response } from "express"
import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item.model"

const insertCar = async (item: Car) => {
    return await ItemModel.create(item)
}

const getCars = async () => {
    return await ItemModel.find({})
}

const getCar = async (id: string) => {
    return await ItemModel.findOne({ _id: id })
}

export { insertCar, getCars, getCar }