import React, {Component} from 'react'
import {
  View,
  NetInfo,
  StatusBar
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {addNavigationHelpers} from "react-navigation";
import NavigationStack from "./navigationStack";
import globalStyles from '../styles/global';
import EStyleSheet from "react-native-extended-stylesheet";
import * as ConnectionActions from '../actions/connection';

EStyleSheet.build(globalStyles);

class AppContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isConnected: null,
    };
    this._handleConnectionChange = this._handleConnectionChange.bind(this)
  }

  componentWillMount() {
    NetInfo.addEventListener('connectionChange', this._handleConnectionChange);
  }

  _handleConnectionChange(connectionInfo) {
    this.props.handleConnection.connectionState(connectionInfo);
  };

  render() {
    console.disableYellowBox = true;
    const {navigationState, dispatch} = this.props;
    let barStyle = "light-content";
    return (
      <View style={styles.container}>
        <StatusBar barStyle ={barStyle}/>
        <NavigationStack
          navigation={addNavigationHelpers({dispatch, state: navigationState})}
        />
      </View>
    );
  }
}
// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
  connectionStatus: state.connection.isConnected,
  navigationState: state.NavigationReducer
});

// Define the actions this component may dispatch
const mapDispatchToProps = (dispatch) => {
  return Object.assign({dispatch: dispatch}, {handleConnection: bindActionCreators(ConnectionActions, dispatch)});
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
const styles = EStyleSheet.create({
  container: {
    flex: 1
  }
})




















