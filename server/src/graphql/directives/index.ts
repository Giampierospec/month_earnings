import { gql } from 'apollo-server-express'
import * as graphql from 'graphql'
import { directivesResolvers } from '../../services/directives'
const paginateDirective = gql`
	directive @paginate(first: String!, page: String) on OBJECT | FIELD_DEFINITION
`
const authDirective = gql`
	# auth directive
	directive @auth(
		checkIfAlreadyLoggedIn: Boolean! = false
	) on OBJECT | FIELD_DEFINITION
`
export const schemaTransforms = [...directivesResolvers]
export const directives = [paginateDirective, authDirective]
