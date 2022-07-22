import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { CreateUserInput } from '../../generated/graphql'
import { IFormSubmit } from '../../interfaces/general'
import Card from '../Card'
import * as Yup from 'yup'
import PrimaryButton from '../PrimaryButton'

const CreateUserForm: React.FC<Partial<IFormSubmit<CreateUserInput>>> = ({
  submit,
}) => {
  const handleSubmit = (values: CreateUserInput) => {
    if (submit) {
      return submit(values)
    }
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    email: Yup.string()
      .required('Email field is required')
      .email('Must provide a valid email'),
    lastName: Yup.string().required('Last Name is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password needs to have at least 8 characters'),
  })

  return (
    <Card>
      <Heading fontSize={{ base: '20px', lg: '24px' }} fontWeight="bold">
        {' '}
        Create New User
      </Heading>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={
          {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
          } as CreateUserInput
        }
      >
        {({ errors, touched }) => (
          <Form>
            <VStack spacing={4} minW={{ base: 'auto', lg: '350px' }}>
              <FormControl isInvalid={touched.email && !!errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field
                  as={Input}
                  name="email"
                  type="email"
                  id="email"
                  isInvalid={touched.email && errors.email}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={touched.firstName && !!errors.firstName}>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Field
                  as={Input}
                  name="firstName"
                  type="text"
                  id="firstName"
                  isInvalid={touched.firstName && errors.firstName}
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={touched.lastName && !!errors.lastName}>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Field
                  as={Input}
                  name="lastName"
                  type="text"
                  id="lastName"
                  isInvalid={touched.lastName && errors.lastName}
                />
                <FormErrorMessage>{errors.lastName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={touched.password && !!errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Field
                  as={Input}
                  name="password"
                  type="password"
                  id="password"
                  isInvalid={touched.password && errors.password}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <PrimaryButton type="submit" alignSelf="flex-start">
                Create
              </PrimaryButton>
            </VStack>
          </Form>
        )}
      </Formik>
    </Card>
  )
}
export default CreateUserForm
