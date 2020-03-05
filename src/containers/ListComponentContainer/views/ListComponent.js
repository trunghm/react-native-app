import React, {Component} from 'react'
import {View, ImageBackground, Image, Platform} from 'react-native';
import ButtonRN from "react-native/Libraries/Components/Button";
import Images from '../../../themes/Images'
import {Button,Avatar,SectionHeader} from "../../../components/commons";
import {GroupButton} from "../../../components/modules";
import {UserControl} from "../../../components/hocs";
import styles from './styles'
import * as navigationStack from '../../../navigation/navigationStack';
import I18n from "../../../I18n";

export default class ListComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles().container}>
        <ButtonRN
          title ={"Back"}
          onPress = {()=>{
            this.props.navigation.goBack();
          }}
        />
        <SectionHeader text={"Ex: Button"}/>
        <Button text={"title"}/>
        <SectionHeader text={"Ex: Avatar"}/>
        <Avatar text={"M"}/>
        <SectionHeader text={"Ex: Group Button"}/>
        <GroupButton data={["button 1","button 2"]}/>
        <SectionHeader text={"Ex: User Control"}/>
        <UserControl
          user ={{active : true}}
        />
      </View>
    )
  }
}

