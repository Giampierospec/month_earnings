import User from '../models/User'
import { comparePassword } from '../utils/password'
import jwt from 'jsonwebtoken'
import { ModifiedRequest } from '../middleware/auth'
import { generateToken, UserRoles, verifyToken } from '../utils/helpers'
import { sendMail } from '../utils/handlebars-init'
import ResetPassword from '../models/ResetPassword'

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
	await sendMail({
		to: userInput.email,
		subject: 'Created user',
		context: {
			name: `${userInput?.firstName} ${userInput?.lastName}`,
			frontend_url: process.env.FRONTEND_URL,
		},
		template: 'register',
	})

	return await User.create({ ...userInput, roleId: UserRoles.NORMAL })
}
export const checkIfLoggedIn = (req: ModifiedRequest) => {
	if (!req.isAuth) {
		throw new Error('Unauthenticated')
	}
}
export const resetPasswordEmail = async (email: string) => {
	const user = await User.findOne({
		where: {
			email,
		},
	})
	if (!user) {
		throw new Error('User not found')
	}
	const { token } = generateToken(user.id, user.email, '5m')
	const rp = await ResetPassword.findOne({
		where: {
			userId: user.id,
		},
	})
	if (rp) {
		rp.token = token
		await rp.save()
	} else {
		await ResetPassword.create({
			token,
			userId: user.id,
		})
	}
	return await sendMail({
		to: user.email,
		template: 'reset-password',
		subject: 'Reset Password',
		context: {
			name: `${user.firstName} ${user.lastName}`,
			frontend_url: process.env.FRONTEND_URL,
			token,
		},
	})
}
interface ResetPasswordParams {
	password: string
	token: string
}
export const resetPasswordService = async ({
	token,
	password,
}: ResetPasswordParams) => {
	const rp = await ResetPassword.findOne({
		where: {
			token,
		},
	})
	if (!rp) {
		throw new Error('This token is not available')
	}
	const payload = verifyToken(token)
	if (!payload) {
		throw new Error('Token is not valid')
	}
	await ResetPassword.destroy({
		where: {
			userId: payload.id,
		},
	})
	await User.update(
		{
			password,
		},
		{
			where: {
				id: payload.id,
			},
		}
	)
	return true
}

export const checkIfAlreadyloggedIn = (req: ModifiedRequest) => {
	if (req.isAuth) {
		throw new Error('Already logged in')
	}
}
