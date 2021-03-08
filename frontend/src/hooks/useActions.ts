import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../store/actions'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

export default useActions
