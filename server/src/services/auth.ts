import User from '../models/User'
import { comparePassword } from '../utils/password'
import jwt from 'jsonwebtoken'
import { ModifiedRequest } from '../middleware/auth'

interface LoginArgs {
	email: string
	password: string
}

export const login = async ({ email, password }: LoginArgs) => {
	const user = (await User.findOne({
		where: {
			email,
		},
	})) as any

	if (!user) {
		throw new Error('User not found')
	}
	const correctPassword = await comparePassword(password, user.password)
	if (!correctPassword) {
		throw new Error('Invalid credentials')
	}
	try {
		const token = jwt.sign(
			{ id: user.id, email: user.email },
			process.env.JWT_SECRET || ''
		)
		return {
			token,
			userId: user.id,
		}
	} catch (error) {
		throw error
	}
}

export const checkIfLoggedIn = (req: ModifiedRequest) => {
	if (!req.isAuth) {
		throw new Error('Unauthenticated')
	}
}
