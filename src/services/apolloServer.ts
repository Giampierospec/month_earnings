import { makeExecutableSchema } from '@graphql-tools/schema'
import {
	ApolloServerPluginDrainHttpServer,
	ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import http from 'http'
import { schemaTransforms } from '../graphql/directives'
import { authDirective, directivesResolvers } from './directives'
export const startApolloServer = async (
	app: any,
	typeDefs: any,
	resolvers: any
) => {
	const httpServer = http.createServer(app)
	const directivesTransformers = [...schemaTransforms]
	let schema = makeExecutableSchema({ typeDefs, resolvers })
	schema = authDirective(schema)
	const server = new ApolloServer({
		schema,
		cache: 'bounded',
		context: ({ req, res }) => ({ req, res }),
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			ApolloServerPluginLandingPageLocalDefault({ embed: true }),
		],
	})
	await server.start()
	server.applyMiddleware({
		app,
		path: '/graphql',
	})
}
