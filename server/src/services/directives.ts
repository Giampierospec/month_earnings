import { defaultFieldResolver, GraphQLSchema } from 'graphql'
import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils'
import { checkIfAlreadyloggedIn as isLoggedIn, checkIfLoggedIn } from './auth'
const paginateDirective = async (schema: GraphQLSchema) => {
	return mapSchema(schema, {
		[MapperKind.OBJECT_FIELD]: (fieldConfig) => {
			const paginateDirective = getDirective(
				schema,
				fieldConfig,
				'paginate'
			)?.[0]
			if (paginateDirective) {
				const { resolve = defaultFieldResolver } = fieldConfig
				return {
					...fieldConfig,
					resolve: async (source, args, context, info) => {
						const result = await resolve(source, args, context, info)
						if (Array.isArray(result)) {
							const { first, page } = paginateDirective as any
							return {
								paginatorInfo: {
									hasMorePages: result.length > parseInt(first) - 1,
								},
								data: result.slice(
									((page as number) - 1) * first,
									((first as number) * page) as number
								),
							}
						}
					},
				}
			}
		},
	})
}

export const authDirective = (schema: GraphQLSchema) =>
	mapSchema(schema, {
		[MapperKind.OBJECT_FIELD]: (fieldConfig) => {
			const authDirective = getDirective(schema, fieldConfig, 'auth')?.[0]

			if (authDirective) {
				const { checkIfAlreadyLoggedIn } = authDirective
				const { resolve = defaultFieldResolver } = fieldConfig
				return {
					...fieldConfig,
					resolve: async (source, args, context, info) => {
						if (!checkIfAlreadyLoggedIn) {
							checkIfLoggedIn(context.req)
						} else {
							isLoggedIn(context.req)
						}
						return await resolve(source, args, context, info)
					},
				}
			}
			return fieldConfig
		},
	})

export const directivesResolvers = [paginateDirective, authDirective]
