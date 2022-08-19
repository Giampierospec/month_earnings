import hbs from 'nodemailer-express-handlebars'
import nodemailer from 'nodemailer'
import path from 'path'
import { MailOptions } from 'nodemailer/lib/json-transport'
import { hbs as hbsInstance } from '../../index'
interface mailOptions extends MailOptions {
	template?: string
	context?: any
}
export const sendMail = async ({
	from = process.env.FROM_EMAIL,
	...rest
}: mailOptions) => {
	const transporter = await nodemailer.createTransport({
		host: 'smtp.sendgrid.net',
		port: 587,
		auth: {
			user: 'apikey', // generated ethereal user
			pass: process.env.SENDGRID_API_KEY, // generated ethereal password
		},
	})
	transporter.use(
		'compile',
		hbs({
			viewEngine: hbsInstance,

			viewPath: path.join(process.cwd(), 'src', 'views', 'templates'),
			extName: '.hbs',
		})
	)
	const info = await transporter.sendMail({ from, ...rest })
	return !!info.messageId
}
