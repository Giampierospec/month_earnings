import { useToast } from '@chakra-ui/react'
import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewGroup } from '../../actions'
import EarningGroupForm from '../../components/EarningGroupForm'
import { CreateEarningGroupInput } from '../../generated/graphql'
import { Actions, Reducers } from '../../interfaces/general'
import { errorsConvert } from '../../utils/helpers'

const CreateEarningGroup: React.FC<Partial<Reducers & Actions>> = ({
  group,
  addNewGroup,
}) => {
  const toast = useToast()
  const navigate = useNavigate()

  const handleSubmit = async (values: CreateEarningGroupInput) => {
    try {
      await addNewGroup({
        input: { ...values },
      })
      if (group.error) {
        toast({
          title: 'An error has ocurred',
          description: errorsConvert(group.error),
          status: 'error',
          isClosable: true,
          duration: 9000,
        })
      }
      toast({
        title: 'Group created successfully',
        description: `Group: ${group?.earningGroups[0]?.name}`,
        status: 'success',
        isClosable: true,
        duration: 9000,
      })
      navigate('/', { replace: true })
    } catch (error) {
      toast({
        title: 'An error has ocurred',
        description: errorsConvert(error),
        status: 'error',
        isClosable: true,
        duration: 9000,
      })
    } finally {
    }
  }
  return <EarningGroupForm submit={handleSubmit} />
}
const mapStateToProps = ({ group }) => ({ group })
export default connect(mapStateToProps, { addNewGroup })(CreateEarningGroup)
