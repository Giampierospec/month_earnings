import dotenv from 'dotenv'
dotenv.config()
import '../connection'
import { umzug } from '../connection'
;(async () => {
	umzug.up()
})()
