'use strict'

import React from 'react'
import {connect} from 'react-redux'
import SplashComponent from './views/index'

const mapStateToProps = (state) => ({
     userState: state.testReducer,
})

// Define the actions this component may dispatch
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashComponent)
