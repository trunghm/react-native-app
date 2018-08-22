import {StackNavigator} from "react-navigation";
import WellComeContainer from './wellcome-container';

const navigator =
  StackNavigator({
      Welcome: {screen: WellComeContainer},
    },
    {
      headerMode: 'none'
    }
  );

export default navigator;
