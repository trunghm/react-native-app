import {
  Platform
} from 'react-native'
import constant from '../../constant/constant'

export default {
  AdelleSans: Platform.OS === constant.PLATFORM.IOS ? 'AdelleSans' : 'Adelle Sans Regular',
  SFUIDisplay: Platform.OS === constant.PLATFORM.IOS ? 'SFUIDisplay' : 'SFUIDisplay',
  SFUIDisplayBold: Platform.OS === constant.PLATFORM.IOS ? 'SFUIDisplay-Bold' : 'SFUIDisplay Bold',
  SFUIDisplayLight: Platform.OS === constant.PLATFORM.IOS ? 'SFUIDisplay-Light' : 'SFUIDisplay Light',
  SFUIDisplaySemibold: Platform.OS === constant.PLATFORM.IOS ? 'SFUIDisplay-Semibold' : 'SFUIDisplay Semibold',
  AdelleSansBold: Platform.OS === constant.PLATFORM.IOS ? 'AdelleSans-Bold' : 'Adelle Sans Bold',
  AdelleSansSemiBold: Platform.OS === constant.PLATFORM.IOS ? 'AdelleSans-SemiBold' : 'Adelle Sans SemiBold',
  AdelleLight: Platform.OS === constant.PLATFORM.IOS ? 'Adelle-Light' : 'Adelle light',
  AdelleSansExtraBold: Platform.OS === constant.PLATFORM.IOS ? 'AdelleSans-ExtraBold' : 'Adelle Sans ExtraBold',
  RobotoRegular: 'Roboto-Regular'
}
