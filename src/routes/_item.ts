import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item.controller";
import { logMiddleware } from "../middlewares/log.middleware";

export const router = Router()

router.get('/item', getItems)
router.get('/item/:id', logMiddleware, getItem)

router.post('/item/create', postItem)

router.put('/item/update/:id', updateItem)

router.delete('/item/delete/:id', deleteItem)

