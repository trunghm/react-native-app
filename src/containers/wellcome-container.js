'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import WelComeComponent from '../components/wellcome-component';

// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
    connectionStatus: state.connection.isConnected,
});

// Define the actions this component may dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        //tabFunc: bindActionCreators(tabAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WelComeComponent);




