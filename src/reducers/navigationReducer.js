import AppNavigator from '../containers/navigationStack'
import ScreenName from '../constant/screen-name'

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams(ScreenName.WELL_COME_SCREEN)
)
const navigationReducer = (state = initialState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return newState || state
}

export default navigationReducer
