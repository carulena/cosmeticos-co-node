import { Router } from 'express'
import getItemByText from '../controllers/getItemByText'
const router = Router()

router.get('/:searchTerm', getItemByText)

export default router