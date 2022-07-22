import {
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react'
import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import { Field, FieldArray, Form, Formik, getIn } from 'formik'
import React from 'react'
import { useParams } from 'react-router-dom'
import {
  CreateEarningInput,
  CurrencyEnum,
  MonthEnum,
} from '../../generated/graphql'
import Card from '../Card'
import * as Yup from 'yup'
import { limitKeyPress } from '../../utils/helpers'
import PrimaryButton from '../PrimaryButton'
import { IFormSubmit } from '../../interfaces/general'

const CreateEarningForm: React.FC<Partial<IFormSubmit<CreateEarningInput>>> = ({
  submit,
}) => {
  const handleSubmit = (values: CreateEarningInput) => {
    if (submit) return submit(values)
  }
  const { earningGroupId } = useParams()
  const createEarningValidationSchema = Yup.object().shape({
    currency: Yup.string().required('Currency is Required'),
    month: Yup.string().required('Month is required'),
    month_earnings: Yup.number()
      .required('Month Earnings is required')
      .min(1, 'Amount must be at least 1'),
    year: Yup.number()
      .required('Year is required')
      .min(new Date().getFullYear(), 'Must be current year')
      .max(3000, 'Cannot exceed max of 3000'),
    concepts: Yup.array()
      .of(
        Yup.object().shape({
          amount: Yup.number()
            .required('amount is required')
            .min(1, 'Amount must be at least 1'),
          concept: Yup.string()
            .required('Concept is required')
            .max(20, 'Maximum 20 characters'),
        })
      )
      .required('Concepts are required')
      .min(1, 'At least 1 concept is required'),
  })
  const checkInvalidConcepts = (errors, touched, name) => {
    const error = getIn(errors, name)
    const touch = getIn(touched, name)
    return touch && error ? error : null
  }
  return (
    <Card>
      <Heading fontSize={{ base: '20px', lg: '24px' }} fontWeight="bold">
        {' '}
        Create Earning
      </Heading>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={createEarningValidationSchema}
        initialValues={
          {
            earning_group_id: parseInt(earningGroupId),
            currency: CurrencyEnum.Dop,
            month: MonthEnum.January,
            month_earnings: 0,
            year: new Date().getFullYear(),
            concepts: [
              {
                amount: 0,
                concept: '',
              },
            ],
          } as CreateEarningInput
        }
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form>
            <VStack spacing={4} minW={{ base: 'auto', md: '350px' }}>
              <FormControl>
                <FormLabel htmlFor="currency">Currency</FormLabel>
                <Field name="currency" id="currency">
                  {({ field }) => (
                    <Select
                      {...field}
                      isInvalid={touched.currency && errors.currency}
                    >
                      {Object.keys(CurrencyEnum).map((k, i) => (
                        <option value={k} key={i}>
                          {k}
                        </option>
                      ))}
                    </Select>
                  )}
                </Field>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="month">Month</FormLabel>
                <Field name="month" id="month">
                  {({ field }) => (
                    <Select
                      {...field}
                      isInvalid={touched.month && errors.month}
                    >
                      {Object.keys(MonthEnum).map((k, i) => (
                        <option value={k} key={i}>
                          {k}
                        </option>
                      ))}
                    </Select>
                  )}
                </Field>
              </FormControl>
              <FormControl isInvalid={touched.year && !!errors.year}>
                <FormLabel htmlFor="year">Year</FormLabel>
                <Field
                  as={Input}
                  name="year"
                  id="year"
                  type="number"
                  isInvalid={touched.year && errors.year}
                  onKeyPress={(e) => limitKeyPress(e)}
                />
                <FormErrorMessage>{errors.year}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={touched.month_earnings && !!errors.month_earnings}
              >
                <FormLabel htmlFor="month_earnings">Month Earnings</FormLabel>
                <Field
                  as={Input}
                  name="month_earnings"
                  id="month_earnings"
                  type="number"
                  isInvalid={touched.month_earnings && errors.month_earnings}
                />
                <FormErrorMessage>{errors.month_earnings}</FormErrorMessage>
              </FormControl>

              <FieldArray name="concepts">
                {({ push, remove }) => (
                  <Flex flexDirection="column">
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text
                        fontFamily="Oswald"
                        py="10px"
                        fontSize="20px"
                        textTransform="uppercase"
                      >
                        Concepts
                      </Text>
                      <PrimaryButton
                        type="button"
                        onClick={() => push({ concept: '', amount: 0 })}
                      >
                        <AddIcon />
                      </PrimaryButton>
                    </Flex>

                    {values.concepts?.map((concept, i) => (
                      <VStack
                        spacing={4}
                        key={i}
                        align="flex-start"
                        minW={{ base: 'auto', md: '350px' }}
                      >
                        <FormControl
                          isInvalid={checkInvalidConcepts(
                            errors,
                            touched,
                            `concepts[${i}].concept`
                          )}
                        >
                          <FormLabel htmlFor="year">Concept</FormLabel>
                          <Field
                            as={Input}
                            name={`concepts[${i}].concept`}
                            id={`concepts[${i}].concept`}
                            onKeyPress={(e) => limitKeyPress(e, 20)}
                            isInvalid={checkInvalidConcepts(
                              errors,
                              touched,
                              `concepts[${i}].concept`
                            )}
                            type="text"
                          />
                          <FormErrorMessage>
                            {checkInvalidConcepts(
                              errors,
                              touched,
                              `concepts[${i}].concept`
                            )}
                          </FormErrorMessage>
                        </FormControl>
                        <FormControl
                          isInvalid={checkInvalidConcepts(
                            errors,
                            touched,
                            `concepts[${i}].amount`
                          )}
                        >
                          <FormLabel htmlFor={`concepts[${i}].amount`}>
                            amount
                          </FormLabel>
                          <Field
                            as={Input}
                            name={`concepts[${i}].amount`}
                            id={`concepts[${i}].amount`}
                            type="number"
                            isInvalid={checkInvalidConcepts(
                              errors,
                              touched,
                              `concepts[${i}].amount`
                            )}
                          />
                          <FormErrorMessage>
                            {checkInvalidConcepts(
                              errors,
                              touched,
                              `concepts[${i}].amount`
                            )}
                          </FormErrorMessage>
                        </FormControl>
                        <PrimaryButton
                          type="button"
                          bg="red"
                          ml="10px"
                          _hover={{
                            bg: 'red.800',
                          }}
                          alignSelf="flex-end"
                          onClick={() => {
                            if (values.concepts.length > 1) {
                              remove(i)
                            }
                          }}
                        >
                          <CloseIcon />
                        </PrimaryButton>
                        <Divider />
                      </VStack>
                    ))}
                  </Flex>
                )}
              </FieldArray>
              <PrimaryButton
                type="submit"
                alignSelf="flex-start"
                isLoading={isSubmitting}
              >
                Submit
              </PrimaryButton>
            </VStack>
          </Form>
        )}
      </Formik>
    </Card>
  )
}
export default CreateEarningForm
