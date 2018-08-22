import {Dimensions, Platform} from 'react-native'
import constant from '../../constant/constant'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const {width, height} = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === constant.PLATFORM.IOS) ? 64 : 54,
  statusBarHeight: (Platform.OS === constant.PLATFORM.IOS) ? getStatusBarHeight() : 0,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  marginLeft: 16,
  marginRight: 16,
  hairLineWidth: 0.5,
  onePxLineWidth: 1
}

export default metrics
