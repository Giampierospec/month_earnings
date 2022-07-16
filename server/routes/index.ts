import { Router } from 'express'
import { getEarnings } from '../controllers/earningController'

const router = Router()
/**
 * Earning routes
 */
router.route('/earnings').get(getEarnings)

export default router
