import User from '../models/User'
import { comparePassword } from '../utils/password'
import jwt from 'jsonwebtoken'
import { ModifiedRequest } from '../middleware/auth'
import { generateToken } from '../utils/helpers'

interface LoginArgs {
	email: string
	password: string
}

export const login = async ({ email, password }: LoginArgs) => {
	const user = await User.findOne({
		where: {
			email,
		},
	})

	if (!user) {
		throw new Error('User not found')
	}
	const correctPassword = await comparePassword(password, user.password)
	if (!correctPassword) {
		throw new Error('Invalid credentials')
	}
	return generateToken(user.id, user.email)
}

interface CreateUserProps {
	firstName: string
	lastName: string
	email: string
	password: string
}
export const createUser = async (userInput: CreateUserProps): Promise<User> => {
	const exists = await User.count({
		where: { email: userInput.email },
	})
	if (exists) {
		throw new Error(`User with email ${userInput.email} already exists`)
	}
	return await User.create({ ...userInput, roleId: 3 })
}
export const checkIfLoggedIn = (req: ModifiedRequest) => {
	if (!req.isAuth) {
		throw new Error('Unauthenticated')
	}
}
export const checkIfAlreadyloggedIn = (req: ModifiedRequest) => {
	if (req.isAuth) {
		throw new Error('Already logged in')
	}
}
