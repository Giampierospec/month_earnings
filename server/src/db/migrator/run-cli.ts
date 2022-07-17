import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
	dotenv.config()
}
import '../connection'
import { umzug } from '../connection'
umzug.runAsCLI()
