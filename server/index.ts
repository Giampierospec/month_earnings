import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import router from './routes'
const cookieSession = require('cookie-session')

dotenv.config()

const app = express()

const port = process.env.PORT
app.use(
	cookieSession({
		keys: [process.env.SECRET],
		maxAge: 24 * 60 * 60 * 1000,
	})
)
app.use(bodyParser.json())

app.use('/api', router)

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
