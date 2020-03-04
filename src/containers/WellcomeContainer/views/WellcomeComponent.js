import React, {Component} from 'react'
import {View, ImageBackground, Image, Platform, Text} from 'react-native';

import styles from './styles';
import I18n from '../../../I18n/I18n';

export default class WelComeComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }




  render () {
    return (
      <View style={styles().container}>
        <Text>{I18n.t('welcome_page')} </Text>
      </View>
    )
  }
}

