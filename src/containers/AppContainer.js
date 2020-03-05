import React, {Component} from 'react'
import {
  View,
  StatusBar, TouchableOpacity, Text,
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';


import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from '../navigation/navigationStack'
import globalStyles from '../styles/global'
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from '../I18n/I18n';

EStyleSheet.build(globalStyles)

class AppContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
        store:null,
       persistStore:null,
    };
    console.log('----props.languageState--',props.languageState)

  }

    async componentDidMount() {
        // const {store ,persistStore} = await configureStore();
        //
        // this.setState({ store,persistStore });
        I18n.locale = this.props.languageState  ? this.props.languageState.name :'vi';
    }

    componentWillReceiveProps = nextProps => {

    }

  render () {
    console.disableYellowBox = true;
  // if(this.state.store === null)return null;
    return (
            <NavigationContainer>
               <NavigationStack/>
          </NavigationContainer>

    )
  }
}
// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
  languageState: state.get('languageReducer').toJS(),
  settingsState: state.get('settingsReducer').toJS(),
})

// Define the actions this component may dispatch
const mapDispatchToProps = (dispatch) => {
  return Object.assign({dispatch: dispatch}, )
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

