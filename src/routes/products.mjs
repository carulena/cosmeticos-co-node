import {Router} from 'express'
import getAllProducts from '../controllers/product.mjs'
const router = Router()

router.get('/', getAllProducts)


export default router