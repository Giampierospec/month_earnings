import path from 'path'
import { Sequelize } from 'sequelize'
import { Umzug, SequelizeStorage } from 'umzug'
export const sequelize = new Sequelize(
	process.env.DB_NAME || '',
	process.env.DB_USERNAME || '',
	process.env.DB_PASSWORD,
	{
		dialect: 'postgres',
		host: process.env.DB_HOST,
		port: parseInt(process.env.DB_PORT || '5432'),
	}
)
export const umzug = new Umzug({
	migrations: { glob: path.resolve('src', 'db', 'migrations/*.ts') },
	context: sequelize.getQueryInterface(),
	storage: new SequelizeStorage({ sequelize }),
	logger: console,
})

// export the type helper exposed by umzug, which will have the `context` argument typed correctly
export type Migration = typeof umzug._types.migration

import '../models'

import '../utils/db_init'
