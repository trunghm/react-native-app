import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Colors from '../themes/Colors';
import Fonts from '../themes/Fonts';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class BoldLink extends Component {
  render() {
    let props = {...this.props};
    const { isTextCenter, isWhiteColor } = this.props;
    const fontWhite = isWhiteColor ? styles.whiteColor : null;
    const textCenter = isTextCenter ? styles.textCenter : null;
    return (
      <TouchableOpacity style={[styles.container, this.props.style]} {...props}>
        <Text style={[styles.text, textCenter, fontWhite]}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    isTextCenter: PropTypes.bool,
    isWhiteColor: PropTypes.bool,
  }

  static defaultProps = {
    text: '',
    fontSize: 14,
    isTextCenter: false,
    isWhiteColor: false
  }
}

const styles = StyleSheet.create({
  text: {
    color: Colors.primary_color,
  },
  whiteColor: {
    color: Colors.white,
  },
  textCenter: {
    textAlign: 'center'
  },
});
