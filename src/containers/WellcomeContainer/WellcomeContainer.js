'use strict'

import React from 'react'
import {connect} from 'react-redux'
import WelComeComponent from './views/index'

// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
})

// Define the actions this component may dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    // tabFunc: bindActionCreators(tabAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelComeComponent)
