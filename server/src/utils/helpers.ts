import jwt from 'jsonwebtoken'
export const generateToken = (id: number, email: string) => {
	try {
		const token = jwt.sign({ id, email }, process.env.JWT_SECRET || '', {
			expiresIn: '1d',
		})
		return {
			token,
			userId: id,
		}
	} catch (error) {
		throw error
	}
}
