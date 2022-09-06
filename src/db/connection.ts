import path from 'path'
import { Sequelize } from 'sequelize'
import { Umzug, SequelizeStorage } from 'umzug'
import dotenv from 'dotenv'
dotenv.config()
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
export const migrator = new Umzug({
	migrations: { glob: path.resolve('src', 'db', 'migrations/*.ts') },
	context: sequelize.getQueryInterface(),
	storage: new SequelizeStorage({ sequelize }),
	logger: console,
})

export const seeder = new Umzug({
	migrations: { glob: path.resolve('src', 'db', 'seeders/*.ts') },
	context: sequelize.getQueryInterface(),
	storage: new SequelizeStorage({ sequelize }),
	logger: console,
})
export type Seeder = typeof seeder._types.migration

// export the type helper exposed by umzug, which will have the `context` argument typed correctly
export type Migration = typeof migrator._types.migration
