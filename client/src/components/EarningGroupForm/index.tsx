import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { CreateEarningGroupInput } from '../../generated/graphql'
import * as Yup from 'yup'
import PrimaryButton from '../PrimaryButton'
import Card from '../Card'
import { IFormSubmit } from '../../interfaces/general'

const EarningGroupForm: React.FC<
  Partial<IFormSubmit<CreateEarningGroupInput>>
> = ({ submit }) => {
  const handleSubmit = (values: CreateEarningGroupInput) => {
    if (submit) {
      return submit(values)
    }
  }
  const earningGroupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
  })
  return (
    <Card>
      <Heading fontSize={{ base: '20px', lg: '36px' }}>
        Create New Group
      </Heading>

      <Formik
        enableReinitialize
        onSubmit={handleSubmit}
        validationSchema={earningGroupSchema}
        initialValues={
          {
            name: '',
          } as CreateEarningGroupInput
        }
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <VStack spacing={4} minW={{ base: 'auto', md: '350px' }}>
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  type="text"
                  isInvalid={touched.name && errors.name}
                />
              </FormControl>
              <PrimaryButton
                type="submit"
                alignSelf="flex-start"
                isLoading={isSubmitting}
              >
                Create
              </PrimaryButton>
            </VStack>
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default EarningGroupForm
