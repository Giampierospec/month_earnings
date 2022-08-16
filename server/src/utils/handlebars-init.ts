import hbs from 'nodemailer-express-handlebars'
import nodemailer from 'nodemailer'
import path from 'path'
import { MailOptions } from 'nodemailer/lib/json-transport'
interface mailOptions extends MailOptions {
	template?: string
	context?: any
}
export const sendMail = async ({
	from = 'giampi_12@hotmail.com',
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
			viewEngine: {
				extname: '.hbs',
				layoutsDir: path.resolve(process.cwd(), 'public', 'layouts'),
				defaultLayout: 'main',
			},

			viewPath: path.resolve(process.cwd(), 'public', 'templates'),
			extName: '.hbs',
		})
	)
	const info = await transporter.sendMail({ from, ...rest })
	console.log(nodemailer.getTestMessageUrl(info))
}
