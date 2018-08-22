import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
} from 'react-native';
import Colors from '../themes/Colors';
import Fonts from '../themes/Fonts';

export default class StandardBoldText extends Component {
  render() {
    let props = {...this.props};
    delete props.style;
    const {isBlueColor, isWhiteColor} = this.props;
    const blueColor = isBlueColor ? styles.blueColor : null;
    const whiteColor = isWhiteColor ? styles.whiteColor : null;
    return (
      <Text
        style={[styles.container, {fontFamily :this.props.fontFamily},this.props.style,
          blueColor, whiteColor]} {...props}>
        {this.props.text}
      </Text>
    );
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    isBlueColor: PropTypes.bool,
    isWhiteColor: PropTypes.bool,
  };

  static defaultProps = {
    text: 'Standard text paragraph lorem ipsum.',
    fontSize: 14,
    isBlueColor: false,
    isWhiteColor: false

  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 14,
    color: Colors.text_color,
    fontWeight: 'bold',
    fontStyle: "normal",
    lineHeight: 11,
    letterSpacing: 0,
  },
  blueColor: {
    color: "#0C71E6",
    lineHeight: 14,
  },
  whiteColor: {
    color: Colors.white,
    lineHeight: 14,
  }
});
