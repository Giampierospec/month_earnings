import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export interface ModifiedRequest extends Request {
	isAuth?: boolean
	userId?: Number
}
export const isLoggedIn = (
	req: ModifiedRequest,
	res: Response,
	next: NextFunction
) => {
	const authToken = req.cookies['Earning-Auth-Token']
	if (!authToken) {
		req.isAuth = false
		return next()
	}
	const token = authToken.split(' ').pop()
	let verify: any
	try {
		verify = jwt.verify(token || '', process.env.JWT_SECRET || '')
	} catch (error) {
		req.isAuth = false
	}
	if (!verify.id) {
		req.isAuth = false
		return next()
	}
	req.userId = verify.id
	req.isAuth = true
	next()
}
