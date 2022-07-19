import { Op } from 'sequelize'
import { ModifiedRequest } from '../middleware/auth'
import EarningConcepts from '../models/EarningConcepts'
import EarningGroup from '../models/EarningGroup'
import Earnings from '../models/Earnings'

enum CurrencyEnum {
	DOP = 'DOP',
	USD = 'USD',
	EUR = 'EUR',
}
interface Concept {
	concept: string
	amount: number
}
interface EarningInput {
	currency: CurrencyEnum
	month_earnings: number
	month: string
	year: number
	concepts: Concept[]
	userId: number
}
interface IAddToEarningGroup {
	name: string
	userId: number
	earnings: { id: number }[]
}

export const createEarning = async ({
	currency,
	month_earnings,
	month,
	year,
	concepts,
	userId,
}: EarningInput): Promise<Earnings> => {
	const exists = await Earnings.findOne({
		where: {
			[Op.and]: [{ month }, { year }, { userId }],
		},
	})
	if (exists) {
		throw new Error(
			`There is already an earning for this user on ${month} and ${year}`
		)
	}
	const conceptSum = concepts?.map((x) => x.amount).reduce((a, b) => a + b)
	if (conceptSum > month_earnings) {
		throw new Error(`The concepts amount can't exceed the monthly earnings`)
	}

	const earning = (await Earnings.create({
		currency,
		month_earnings,
		spent_in_month: conceptSum,
		month,
		year,
		userId,
	})) as any
	await EarningConcepts.bulkCreate([
		...concepts.map((concept) => ({ ...concept, earnings_id: earning.id })),
	])

	return earning
}

export const getEarnings = async (
	userId: number,
	earningGroupId: number
): Promise<Earnings[]> => {
	return await Earnings.findAll({
		where: {
			[Op.and]: [{ userId, earning_group_id: earningGroupId }],
		},
	})
}
export const getEarningGroups = async (userId: number) => {
	return EarningGroup.findAll({
		where: { userId },
	})
}
interface CreateEarningGroupProps {
	name: string
	userId: number
}
export const createEarningGroup = async ({
	name,
	userId,
}: CreateEarningGroupProps) => {
	const exists = await EarningGroup.count({
		where: {
			[Op.and]: [{ name, userId }],
		},
	})
	if (exists) {
		throw new Error(
			`There is already an earning group with name ${name} for this user`
		)
	}
	return await EarningGroup.create({
		name: name.trim(),
		userId,
	})
}
export const addToEarningGroup = async ({
	name,
	userId,
	earnings,
}: IAddToEarningGroup) => {
	const earningGroup = (await EarningGroup.findOne({
		where: {
			[Op.and]: [{ name, userId }],
		},
	})) as any

	if (!earningGroup) {
		throw new Error(`No earning group found with name ${name}`)
	}
	const resultEarnings = await Earnings.findAll({
		where: {
			id: [...earnings.map((x) => x.id)],
		},
	})
	resultEarnings?.forEach(async (earning: any) => {
		earning.earning_group_id = earningGroup.id
		await earning.save()
	})
	return {
		id: earningGroup.id,
		name: earningGroup.name,
	}
}
