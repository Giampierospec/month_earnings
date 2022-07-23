import { GraphQLSchema } from 'graphql'
import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils'
import { resolve } from 'path'
const paginateDirective = async (schema: GraphQLSchema) => {
	return mapSchema(schema, {
		[MapperKind.OBJECT_FIELD]: (fieldConfig) => {
			const paginateDirective = getDirective(schema, fieldConfig, 'paginate')
			if (paginateDirective) {
				return {
					...fieldConfig,
					resolve: async (source, args, context) => {
						const result = await resolve(source, args, context)
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

export const directivesResolvers = [paginateDirective]
