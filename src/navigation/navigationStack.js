import React, { Component } from 'react'
import LoginContainer from '../containers/LoginContainer/LoginContainer'
import SplashScreenContainer from '../containers/SplashScreenContainer/SplashContainer'
import TabStack from './tabStack'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


export const HOME_SCREEN = "Home";
export const LOGIN_SCREEN = "Login";
export const SPLASH_SCREEN = "Splash";


function NavigationStack() {
    return (
        <Stack.Navigator
            initialRouteName={HOME_SCREEN}
            headerMode="screen"
        >
            <Stack.Screen name={HOME_SCREEN} component={TabStack} />
            <Stack.Screen name={LOGIN_SCREEN} component={LoginContainer} />
            <Stack.Screen name={SPLASH_SCREEN} component={SplashScreenContainer} />
        </Stack.Navigator>
    );
}

export default NavigationStack
