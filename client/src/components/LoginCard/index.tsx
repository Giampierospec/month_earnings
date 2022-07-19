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

interface CardProps {
  error: string
  submit: (values: FormProps) => void
}
export interface FormProps {
  email: string
  password: string
}

const LoginCard: React.FC<Partial<CardProps>> = ({ submit, error }) => {
  const handleSubmit = (values: FormProps) => {
    if (submit) {
      submit(values)
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
    <Flex w="100%" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        py="25px"
        px={{ base: '50px', md: 'auto', lg: '75px' }}
        w="100%"
        maxW={{ base: 'sm', lg: 'lg', xl: 'xl' }}
        justifyContent="center"
        alignItems="flex-start"
        borderRadius="lg"
        border="1px solid #CCC"
      >
        {error && (
          <Text fontSize={{ base: '16px' }} color="red">
            {error}
          </Text>
        )}
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
            } as FormProps
          }
        >
          {({ touched, errors }) => (
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
                <PrimaryButton type="submit" alignSelf="flex-start">
                  Login
                </PrimaryButton>
              </VStack>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  )
}

export default LoginCard
