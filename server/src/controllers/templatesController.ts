import { mailStyles } from '../utils/helpers'

export const resetPassword = (req: Express.Request, res: any) => {
	return res.render('templates/reset-password', {
		name: 'Giampiero Specogna',
		frontend_url: process.env.FRONTEND_URL,
		token: 'blabla',
		mail: mailStyles?.toString('utf-8'),
	})
}
export const register = (req: Express.Request, res: any) => {
	return res.render('templates/register', {
		name: 'Giampiero Specogna',
		frontend_url: process.env.FRONTEND_URL,
		mail: mailStyles?.toString('utf-8'),
	})
}
