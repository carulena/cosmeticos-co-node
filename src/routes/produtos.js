import { Router } from 'express'
import getItems from '../controllers/getItems.js'
import getItemById from '../controllers/getItemById.js'

const router = Router()

router.get('/', getItems)

router.get('/:id', getItemById)

export default router