import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item.controller";
import { logMiddleware } from "../middlewares/log.middleware";

export const router = Router()

router.get('/', getItems)
router.get('/:id', logMiddleware, getItem)

router.post('/', postItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

