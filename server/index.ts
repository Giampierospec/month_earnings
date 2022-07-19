import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import router from './src/routes'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './src/graphql/schema'
import cors from 'cors'
import './src/db/connection'
import { isLoggedIn } from './src/middleware/auth'
import cookieParser from 'cookie-parser'
import expressPlayground from 'graphql-playground-middleware-express'

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
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
)
app.get(
	'/graphql-playground',
	expressPlayground({
		endpoint: '/graphql',
		settings: {
			'request.credentials': 'same-origin',
		},
	})
)
app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
