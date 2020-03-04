import React, {Component} from 'react'
import {View, ImageBackground, Image, Platform,Text,TouchableOpacity} from 'react-native'
import styles from './styles';

import I18n from '../../../I18n/I18n'
import {NavigationContainer} from '@react-navigation/native';

import { CommonActions } from '@react-navigation/native';
import Images from '../../../components/themes/Images';
import * as navigationStack from '../../../navigation/navigationStack';

export default class SplashComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }

  }

    componentDidMount () {
      this.props.navigation.replace(navigationStack.LOGIN_SCREEN);
    }

  render () {
    return (
      <View style={styles().container}>
          <ImageBackground source={Images.splash} style={styles().splash}>
          </ImageBackground>
      </View>
    )
  }
}

