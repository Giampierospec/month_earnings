import jwt from 'jsonwebtoken'
export const generateToken = (
	id: number,
	email: string,
	expire: string = '1d'
) => {
	try {
		const token = jwt.sign({ id, email }, process.env.JWT_SECRET || '', {
			expiresIn: expire,
		})
		return {
			token,
			userId: id,
		}
	} catch (error) {
		throw error
	}
}
export const verifyToken = (token: string) => {
	try {
		return jwt.verify(token, process.env.JWT_SECRET || '') as any
	} catch (error) {
		return null
	}
}
interface PageableList<T> {
	hasMore: boolean
	total: number
	currentPage: number
	items: T[]
}

export enum UserRoles {
	SUPER_ADMIN = 1,
	ADMIN = 2,
	NORMAL = 3,
}
export const generatePagination = <T>(
	total: number,
	first: number,
	page: number,
	items: T[]
): PageableList<T> => {
	const totalPages = Math.ceil(total / first)
	return {
		total,
		currentPage: page,
		hasMore: page < totalPages,
		items: items.slice((page - 1) * first, page * first),
	}
}
