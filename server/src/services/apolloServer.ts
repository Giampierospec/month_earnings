import { makeExecutableSchema } from '@graphql-tools/schema'
import {
	ApolloServerPluginDrainHttpServer,
	ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import http from 'http'
import { schemaTransforms } from '../graphql/directives'
export const startApolloServer = async (
	app: any,
	typeDefs: any,
	resolvers: any
) => {
	const httpServer = http.createServer(app)
	const directivesTransformers = [...schemaTransforms]
	const schema = makeExecutableSchema({ typeDefs, resolvers })
	// directivesTransformers.reduce(
	// 	(schema: any, transformer) => transformer(schema),
	// 	schema
	// )
	// // console.log(sc)
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
