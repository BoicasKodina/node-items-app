import { Router } from "express";
const router = Router();

import { GET_ITEMS_FOR_SALE, GET_ITEMS_BY_ID, POST_ITEMS_FOR_SALE, UPDATE_ITEM, DELETE_ITEM } from "../controllers/items.js";


router.get('/items', GET_ITEMS_FOR_SALE);
router.get('/items/:id', GET_ITEMS_BY_ID );
router.post('/items', POST_ITEMS_FOR_SALE);
router.put('/items/:id', UPDATE_ITEM );
router.delete('/items/:id', DELETE_ITEM )

export default router;

