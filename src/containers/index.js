import React, { Component } from 'react'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './AppContainer'
import appReducer from '../reducers/index'
// import SplashScreen from 'react-native-smart-splash-screen'

let middleware = [
  thunk // Allows action creators to return functions (not just plain objects)
]

const store = compose(
  applyMiddleware(...middleware)
)(createStore)(appReducer)

export default class AppContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // SplashScreen.close({
    //   animationType: SplashScreen.animationType.scale,
    //   duration: 850,
    //   delay: 500
    // })
  }

  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
