import React, {Component} from 'react'
import {View, ImageBackground, Image, Platform, Text, TouchableOpacity, Switch} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Images from '../../../components/themes/Images'
import Colors from '../../../components/themes/Colors'
import styles from './styles';
import I18n from '../../../I18n/I18n'
import {NavigationContainer} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {DARK_MODE, LIGHT_MODE} from "../../../themes/Colors";
import GlobalStore from "../../../themes/GlobalStore";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const {settingsState: {theme}, settingsActions} = this.props;

    return (
      <View style={[styles().container]}>
        <Text style={styles().text}>Change Theme</Text>
        <Switch value={LIGHT_MODE === theme ? false : true} onValueChange={value => {
          settingsActions.changeTheme({theme: value === true ? DARK_MODE : LIGHT_MODE});
        }}/>
        <Text style={styles().text}>{I18n.t("home_page")}</Text>
        <Text style={styles().text}>Change To Vietnamese</Text>
        <Switch  onValueChange={value => {
          this.props.languageAction.changeLanguage('en')
        }}/>


      </View>
    )
  }
}

