import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../themes/Colors';
import Fonts from '../themes/Fonts';

export default class StandardLink extends Component {
  render() {
    let props = {...this.props};
    delete props.style;
    const {isBlackLinkStyle} = props;
    const blackLinkStyle = isBlackLinkStyle ? styles.blackLink : null;
    return (
      <TouchableOpacity style={[styles.container, this.props.style]} {...props}>
        <Text style={[styles.text, blackLinkStyle]}
        >{this.props.text}</Text>
      </TouchableOpacity>
    );
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    isBlackLinkStyle: PropTypes.bool,
  };

  static defaultProps = {
    text: '',
    fontSize: 14,
    isBlackLinkStyle: false,
  };
}

const styles = StyleSheet.create({
  text: {
    color: Colors.primary_color,
  },
  blackLink: {
    color: "#222222",
    textDecorationLine: "underline"
  }
});
