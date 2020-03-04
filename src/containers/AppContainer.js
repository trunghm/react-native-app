import React, {Component} from 'react'
import {
  View,
  StatusBar, TouchableOpacity, Text,
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from '../navigation/navigationStack'
import TabStack from '../navigation/tabStack'
import globalStyles from '../styles/global'
import EStyleSheet from 'react-native-extended-stylesheet';
import configureStore from "../store/configureStore";
import I18n from '../I18n/I18n';

import { Provider } from "react-redux";
EStyleSheet.build(globalStyles)

class AppContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
        store:null,
    };
    console.log('----props.languageState--',props.languageState)

  }

    async componentDidMount() {
        const store = await configureStore();

        this.setState({ store });
        I18n.locale = this.props.languageState.name;
    }

    componentWillReceiveProps = nextProps => {

    }

  render () {
    console.disableYellowBox = true;
      if (!this.state.store) return null;
    return (
        <Provider store={this.state.store}>
        <NavigationContainer>
           <NavigationStack/>
      </NavigationContainer>
        </Provider>
    )
  }
}
// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
    languageState: state.languageReducer,
})

// Define the actions this component may dispatch
const mapDispatchToProps = (dispatch) => {
  return Object.assign({dispatch: dispatch}, )
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

