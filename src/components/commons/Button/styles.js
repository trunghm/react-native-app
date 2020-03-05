import EStyleSheet from "react-native-extended-stylesheet";
import GlobalStore from "../../../themes/GlobalStore";

const styles = () => EStyleSheet.create({
  container: {
    width :"100%",
    maxWidth: '100%',
    maxHeight:50,
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: GlobalStore.color.buttonTitle,
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor:GlobalStore.color.buttonBgDisable,
  },
  buttonWrapper: {
    backgroundColor:GlobalStore.color.primary,
   flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radiusButton: {
    borderRadius: 5,
    marginBottom: 24,
    marginRight: 16,
    marginLeft: 16
  }
});

export default styles;
