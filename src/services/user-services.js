import * as userApiMock from '../apis/user-apis-mock'
import userApi from '../apis/user-apis'
import {getPlayerAndFollowedTeams, log} from '../utils/common-utils'
import User from '../models/User'

export const login = async (email, password) => {
  try {
    const login = await userApiMock.login(email, password)
    if (login.success) {
      const userPreferences = await userApi.getMemberPreferences(email)
      if (!userPreferences || !userPreferences.data || !userPreferences.data.status || userPreferences.data.status.statusCode !== 200) {
        // TODO: Currently, we still hardcoded here to make login work with the mock API
        let user = new User(login.data)
        return {
          ...{data: user},
          ...{success: true, message: login.message}
        }
      }
      const {userDetail, preferenceDetails} = userPreferences.data
      let user = new User({...userDetail, loggingEmail: email, ...getPlayerAndFollowedTeams(preferenceDetails)})
      return {
        ...{data: user},
        ...{success: true, message: login.message}
      }
    } else {
      log('ERROR: user-services/login', login.message)
    }
  } catch (error) {
    log(error)
    throw new Error(error)
  }
}
