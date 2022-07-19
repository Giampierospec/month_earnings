import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useEffect } from 'react'
import { me } from '../../graphql/queries/me'
import PrimaryButton from '../PrimaryButton'

interface CardProps {
  submit: (values: FormProps) => void
}
interface FormProps {
  email: string
  password: string
}

const LoginCard: React.FC<Partial<CardProps>> = ({ submit }) => {
  const handleSubmit = (values: FormProps) => {
    if (submit) {
      submit(values)
    }
  }
  useEffect(() => {
    me()
  }, [])
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
          initialValues={
            {
              email: '',
              password: '',
            } as FormProps
          }
        >
          {() => (
            <Form>
              <VStack spacing={4} minW={{ base: 'auto', md: '350px' }}>
                <FormControl flexGrow={1}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Field as={Input} id="email" name="email" type="email" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
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
