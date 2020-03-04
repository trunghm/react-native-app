import React, {Component} from 'react'
import {View, ImageBackground, Image, Platform} from 'react-native'
import BoldLink from '../../../components/commons/BoldLink'
import Images from '../../../components/themes/Images'
import styles from './styles'
import * as navigationStack from '../../../navigation/navigationStack';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  onLogInClick = () => {
    this.props.testActions.getTestData({user: "octokit", repo: "octokit.rb"}).then(res => {
      this.props.navigation.replace(navigationStack.HOME_SCREEN);
    })
  }

  render() {
    return (
      <View style={styles().container}>
        <ImageBackground source={Images.splash} style={styles().splash}>
          <View style={styles().logoWrapper}>
            <Image source={Images.logo}/>
          </View>
          <View style={styles().bodyWrapper}>

            <View style={styles().loginWrapper}>
              <BoldLink
                onPress={this.onLogInClick}
                text={'LOGIN'}
                isWhiteColor={true}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

