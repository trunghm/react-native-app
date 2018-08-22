import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    Text,
} from 'react-native';
import Colors from '../themes/Colors';
import Fonts from '../themes/Fonts';
import EStyleSheet from 'react-native-extended-stylesheet'

export default class StandardText extends Component {
    render() {
        let props = {...this.props};
        delete props.style;
        let boldText = this.props.boldText;
        let arrText = [];
        if(boldText.length > 0) arrText = this.props.text.split(boldText)
        const { isTextCenter, isWhiteColor } = props;
        const fontWhite = isWhiteColor ? styles.whiteColor : null;
        const textCenter = isTextCenter ? styles.textCenter : null;
        return (
            <Text
              style={[styles.container, this.props.style,
                textCenter, fontWhite]} {...props}>
                {arrText.length > 1? arrText[0] : this.props.text}
                {arrText.length > 1 && <Text>{boldText}</Text>}
                {arrText.length > 1? arrText[1] : ''}
                {this.props.underlineText !== null && this.props.underlineText.length > 0 && <Text style={{textDecorationLine: 'underline'}} onPress={() => this.props.onLinkPress && this.props.onLinkPress()}>{this.props.underlineText}</Text>}
            </Text>
        );
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        isTextCenter: PropTypes.bool,
        isWhiteColor: PropTypes.bool
    }

    static defaultProps = {
        text: '',
        boldText: '',
        underlineText: '',
        fontSize: 14,
        onLinkPress: null,
        autoSize: true,
        isTextCenter: false,
        isWhiteColor: false
    }
}

const styles = EStyleSheet.create({
    container: {
        color: Colors.text_color,
    },
    textCenter: {
      textAlign: 'center'
    },
    whiteColor: {
      color: Colors.white,
      fontSize: 13,
      lineHeight: Platform.OS === 'ios' ? 18 : 22
    }
});
