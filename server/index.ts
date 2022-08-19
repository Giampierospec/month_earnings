import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { Resolvers, TypeDefs } from './src/graphql/schema'
import cors from 'cors'
import './src/db/connection'
import { isLoggedIn } from './src/middleware/auth'
import cookieParser from 'cookie-parser'
import { startApolloServer } from './src/services/apolloServer'
import path from 'path'
import { create } from 'express-handlebars'
import router from './src/routes'
dotenv.config()

const cookieSession = require('cookie-session')

const app = express()
export const hbs = create({
	layoutsDir: path.join(__dirname, 'src', 'views', 'layouts'),
	defaultLayout: 'main',
	extname: 'hbs',
})

const port = process.env.PORT
if (process.env.NODE_ENV === 'product')
	app.use(
		cookieSession({
			keys: [process.env.SECRET],
			maxAge: 24 * 60 * 60 * 1000,
		})
	)
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())
app.use(isLoggedIn)

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src', 'views'))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use('/', router)
;(async () => {
	await startApolloServer(app, TypeDefs, Resolvers)
})()
if (process.env.NODE_ENV === 'production') {
	// Express will serve Production Assets
	app.use(express.static(path.resolve(__dirname, '../client', 'build')))

	//Express will serve up the index.html

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
	})
}
app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
