import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useEffect } from 'react'
import { me } from '../../graphql/queries/me'
import PrimaryButton from '../PrimaryButton'
import * as Yup from 'yup'
import Card from '../Card'
import { IFormSubmit } from '../../interfaces/general'
import { LoginInput } from '../../generated/graphql'
import { Link } from 'react-router-dom'

const LoginCard: React.FC<Partial<IFormSubmit<LoginInput>>> = ({ submit }) => {
  const handleSubmit = (values: LoginInput) => {
    if (submit) {
      return submit(values)
    }
  }
  useEffect(() => {
    me()
  }, [])
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Need to introduce correct format for email'),
    password: Yup.string().required('Password is required'),
  })
  return (
    <Card>
      <Heading
        textTransform="uppercase"
        fontSize={{ base: '20px', lg: '36px' }}
        fontWeight="bold"
        color="primary"
      >
        Login
      </Heading>
      <Box
        height="0"
        my="15px"
        border="1px solid #000"
        w="100%"
        borderColor="primary"
      />
      <Formik
        enableReinitialize
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
        initialValues={
          {
            email: '',
            password: '',
          } as LoginInput
        }
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <VStack spacing={4} minW={{ base: 'auto', md: '350px' }}>
              <FormControl flexGrow={1}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  isInvalid={touched.email && errors.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  isInvalid={touched.password && errors.password}
                />
              </FormControl>
              <PrimaryButton
                type="submit"
                alignSelf="flex-start"
                isLoading={isSubmitting}
              >
                Login
              </PrimaryButton>

              <Text fontSize="16px" fontStyle="italic">
                Don't have an account please{' '}
                <Box as={Link} to="/new-user" textDecoration="underline">
                  Click here&nbsp;
                </Box>
                to register
              </Text>
            </VStack>
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default LoginCard
