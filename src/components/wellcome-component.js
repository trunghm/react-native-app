import React, {Component} from 'react'
import {View, ImageBackground, Image, Platform} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import Metrics from './themes/Metrics'
import PlaceHolderRow from './commons/PlaceHolderRow'
import StandardBoldText from './commons/StandardBoldText'
import StandardText from './commons/StandardText'
import Button from './commons/Button'
import BoldLink from './commons/BoldLink'
import Images from './themes/Images'
import Colors from './themes/Colors'
const CarouselData = [
  {
    title: 'THE ESSENTIAL SPORTS TEAM APP',
    description: 'Stay up to date with your teams schedule, scores,\nladders and team messages. And receive a\nnotification anything changes'
  },
  {
    title: 'LIVE SCORES & STATS',
    description: "Admin's can enter official scores and stats and everyone can follow along as it happens"
  },
  {
    title: 'ATTENDANCE & DUTIES',
    description: 'See who can make it to the game, and roster parents and staff to help out with duties'
  },
  {
    title: 'MANAGE YOUR TEAM',
    description: 'See Players, Staff, Parents and Volunteers with contact details in one handy location.'
  },
  {
    title: 'MESSAGES',
    description: 'Team messaging made simple, one place for all communications.'
  }
]
const SLIDER_1_FIRST_ITEM = 0
export default class WelComeComponent extends Component {
  constructor (props) {
    super(props)
    this.onGetStartClick = this.onGetStartClick.bind(this)
    this.onLogInClick = this.onLogInClick.bind(this)
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    }
  }

  onGetStartClick () {
    // Navigate.pushTo(this.props, ScreenName.ENTER_EMAIL_SCREEN);
  }

  onLogInClick () {
    // Navigate.pushTo(this.props, ScreenName.LOGIN_SCREEN);
  }

  renderTextItem ({item, index}) {
    return (
      <View style={styles.slideInnerContainer}>
        <PlaceHolderRow height={30}/>
        <StandardBoldText text={item.title || ''} isWhiteColor={true}/>
        <StandardText text={item.description || ''} isWhiteColor={true} isTextCenter={true}/>
      </View>
    )
  }

  renderCarouselView () {
    const {slider1ActiveSlide} = this.state
    return (
      <View style={styles.carouselWrapper}>
        <Carousel
          ref={c => this._slider1Ref = c}
          data={CarouselData}
          renderItem={this.renderTextItem}
          sliderWidth={Metrics.screenWidth}
          itemWidth={Metrics.screenWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          loop={true}
          loopClonesPerSide={2}
          onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}
        />
        <Pagination
          dotsLength={CarouselData.length}
          activeDotIndex={slider1ActiveSlide}
          dotColor={Colors.white}
          dotStyle={styles.paginationDot}
          inactiveDotColor={Colors.white}
          inactiveDotOpacity={0.25}
          inactiveDotScale={1}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ImageBackground source={Images.splash} style={styles.splash}>
          <View style={styles.logoWrapper}>
            <Image source={Images.logo}/>
          </View>
          <View style={styles.bodyWrapper}>
            {this.renderCarouselView()}
            <View style={styles.createUserButtonWrapper}>
              <Button isShowRadiusButton
                text={'CREATE ACCOUNT'}
                onPress={this.onGetStartClick}
              />
            </View>
            <View style={styles.loginWrapper}>
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

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  splash: {
    width: '100%',
    height: '100%'
  },
  logoWrapper: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 163
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 20,
    position: 'absolute'
  },
  paginationDot: {
    width: 7,
    height: 7,
    borderRadius: 3,
    marginHorizontal: 0
  },
  slideInnerContainer: {
    width: Metrics.screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: Metrics.marginLeft,
    paddingRight: Metrics.marginRight
  },
  slider: {
    overflow: 'visible' // for custom animations
  },
  listItemWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50
  },
  createUserButtonWrapper: {
    width: '100%',
    height: 50
  },
  carouselWrapper: {
    height: Platform.OS === 'ios' ? 190 : 196,
    width: '100%'
  }
})
