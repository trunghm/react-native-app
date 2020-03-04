import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WellcomeContainer from '../containers/WellcomeContainer/WellcomeContainer';
import HomeContainer from '../containers/HomeContainer/HomeContainer';
const Tab = createBottomTabNavigator();

export const MESSAGE_SCREEN = "Message";
export const WELL_COME_SCREEN = "Welcome";

function TabStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name= {MESSAGE_SCREEN}  component={ HomeContainer} />
            <Tab.Screen name= {WELL_COME_SCREEN} component={WellcomeContainer} />
        </Tab.Navigator>
    );
}


export default TabStack
