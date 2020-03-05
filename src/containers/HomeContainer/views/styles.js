import EStyleSheet from "react-native-extended-stylesheet";
import {Platform} from "react-native";
import GlobalStore from "../../../themes/GlobalStore";

const styles = () => EStyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:GlobalStore.color.primaryBg
    // backgroundColor:GlobalStore.color.primaryBg
  },
  splash: {
    width: '100%',
    height: '100%'
  },
  logoWrapper: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 163
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 20,
    position: 'absolute'
  },
  paginationDot: {
    width: 7,
    height: 7,
    borderRadius: 3,
    marginHorizontal: 0
  },
  slideInnerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  slider: {
    overflow: 'visible' // for custom animations
  },
  listItemWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50
  },
  createUserButtonWrapper: {
    width: '100%',
    height: 50
  },
  carouselWrapper: {
    height: Platform.OS === 'ios' ? 190 : 196,
    width: '100%'
  }
});
export default styles;
