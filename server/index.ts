import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import router from './src/routes'
import cors from 'cors'
require('ts-node/register')
if (process.env.NODE_ENV !== 'production') {
	dotenv.config()
}

import './src/db/connection'

const cookieSession = require('cookie-session')

const app = express()

const port = process.env.PORT

app.use(
	cookieSession({
		keys: [process.env.SECRET],
		maxAge: 24 * 60 * 60 * 1000,
	})
)
app.use(cors())
app.use(bodyParser.json())

app.use('/api', router)

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
