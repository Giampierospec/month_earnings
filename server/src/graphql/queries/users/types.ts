import * as graphql from 'graphql'
import Roles from '../../../models/Roles'
import User from '../../../models/User'
export const baseUser = {
	firstName: { type: graphql.GraphQLString },
	lastName: { type: graphql.GraphQLString },
	email: { type: graphql.GraphQLString },
}
export const userType = new graphql.GraphQLObjectType({
	name: 'User',
	description: 'User Type Object',
	fields: {
		id: { type: graphql.GraphQLInt },
		...baseUser,
		role: {
			type: graphql.GraphQLString,
			resolve: async (obj) => {
				const user = (await User.findByPk(obj.id)) as any
				if (user) {
					const role = (await Roles.findOne({
						where: {
							id: user.roleId,
						},
					})) as any
					return role.role
				}
			},
		},
	},
})
