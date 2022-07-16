import { Request, Response } from 'express'
export const getEarnings = (req: Request, res: Response) => {
	return res.json({
		status: 'Ok',
	})
}
