import { Router } from 'express'
import { register, resetPassword } from '../controllers/templatesController'

const router = Router()
/**
 * TemplateRoutes
 */
router.route('/reset-password').get(resetPassword)

router.route('/register').get(register)

export default router
