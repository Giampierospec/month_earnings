import { gql } from 'apollo-server-express'
import Roles from '../../../models/Roles'
import User from '../../../models/User'

const user = gql`
	# User type object
	"User Type Object"
	type User {
		id: Int
		firstName: String
		lastName: String
		email: String
		role: String
	}
`
export const userTypeResolvers = {
	User: {
		role: async (parent: any) => {
			const user = (await User.findOne({
				where: { id: parent.id },
				include: Roles,
			})) as any
			return user?.Role?.role
		},
	},
}
export const userTypeDefinitions = [user]
