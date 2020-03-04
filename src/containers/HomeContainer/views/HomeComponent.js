import React, {Component} from 'react'
import {View, ImageBackground, Image, Platform,Text,TouchableOpacity} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Images from '../../../components/themes/Images'
import Colors from '../../../components/themes/Colors'
import styles from './styles';

import I18n from '../../../I18n/I18n'
import {NavigationContainer} from '@react-navigation/native';

import { CommonActions } from '@react-navigation/native';

export default class HomeComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.props.languageAction.changeLanguage('en')
  }


  render () {
    return (
      <View style={styles().container}>
          <Text>{I18n.t('home_page')} </Text>
        <TouchableOpacity onPress={()=>{
          this.props.languageAction.changeLanguage('en')
          this.props.navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  { name: 'Home' },
                ],
              })
          );

        }}><Text>{'change'}</Text></TouchableOpacity>

      </View>
    )
  }
}

