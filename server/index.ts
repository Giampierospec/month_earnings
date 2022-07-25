import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { Resolvers, TypeDefs } from './src/graphql/schema'
import cors from 'cors'
import './src/db/connection'
import { isLoggedIn } from './src/middleware/auth'
import cookieParser from 'cookie-parser'
import { startApolloServer } from './src/services/apolloServer'

dotenv.config()

const cookieSession = require('cookie-session')

const app = express()

const port = process.env.PORT

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
;(async () => {
	await startApolloServer(app, TypeDefs, Resolvers)
})()
app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
