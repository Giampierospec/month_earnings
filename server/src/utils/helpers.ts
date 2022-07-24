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
interface PageableList<T> {
	hasMore: boolean
	total: number
	currentPage: number
	items: T[]
}
export const generatePagination = <T>(
	total: number,
	first: number,
	page: number,
	items: T[]
): PageableList<T> => {
	const totalPages = Math.ceil(total / first)
	console.log(total)
	console.log(first)
	return {
		total,
		currentPage: page,
		hasMore: page < totalPages,
		items: items.slice((page - 1) * first, page * first),
	}
}
