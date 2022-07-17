import bcrypt from 'bcrypt'
import { promisify } from 'util'

const bcryptHash = promisify(bcrypt.hash)
const bcryptCompare = promisify(bcrypt.compare)
const SALT = 10

/**
 * Generates password hash
 * @param password
 * @returns
 */
export const genPassword = async (password: string): Promise<string> => {
	return await bcryptHash(password, SALT)
}

/**
 * Compares password for login purposes
 * @param plainPassword
 * @param hashedPassword
 * @returns
 */
export const comparePassword = async (
	plainPassword: string,
	hashedPassword: string
): Promise<Boolean> => {
	return await bcryptCompare(plainPassword, hashedPassword)
}
