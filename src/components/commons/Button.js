import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Colors from '../themes/Colors';
import Fonts from '../themes/Fonts';
import Metrics from '../themes/Metrics';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Button extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let props = {...this.props};
    const {isShowRadiusButton} = this.props;
    const radiusStyle = isShowRadiusButton ? styles.radiusButton : {};
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.props.onPress}
          underlayColor={Colors.pressed_color}
                            style={[styles.buttonWrapper, props.disabled?styles.disabled:null, radiusStyle]}
        >
          <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
        </TouchableHighlight>
      </View>);
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    isShowRadiusButton: PropTypes.bool,
  };
  // , radiusStyle

  static defaultProps = {
    text: 'Button',
    disabled: false,
    onPress: () => {},
    isShowRadiusButton: false,
  };
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: -0.34,
  },
  disabled: {
    backgroundColor: Colors.button_disbaled_color,
  },
  buttonWrapper: {
    backgroundColor: Colors.primary_color,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radiusButton: {
    borderRadius: 5,
    marginBottom: 24,
    marginRight: Metrics.marginRight,
    marginLeft: Metrics.marginLeft
  }
});
