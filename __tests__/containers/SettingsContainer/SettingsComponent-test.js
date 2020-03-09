/**
 * @format
 */

import React from 'react';
import {SettingComponent} from '../../../src/containers/SettingsContainer/SettingsContainer';

import {View, Text, Switch, Button} from 'react-native'
// Note: test renderer must be required after react-native.
import {mount, shallow} from 'enzyme';
import renderer from  "react-test-renderer";
import EStyleSheet from 'react-native-extended-stylesheet';
import {DARK_MODE, LIGHT_MODE} from "../../../src/themes/Colors";


const originalError = console.error;

beforeAll(() => {
  console.error = jest.fn();
  EStyleSheet.build({
  });
});

afterAll(() => {
  console.error = originalError;
});

jest.mock('react-native-gesture-handler', () => {});
jest.mock('@react-navigation/stack', () => {
  return {
    createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) {return null;}),
    createDrawerNavigator: jest.fn(),
    createMaterialTopTabNavigator: jest.fn(),
    createStackNavigator: jest.fn(),
    StackActions: {
      push: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/PUSH"})),
      replace: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/REPLACE"})),
    },
    NavigationActions: {
      navigate: jest.fn().mockImplementation(x => x),
    }
  }
});


describe('Testing  SettingsComponent component', () => {

  const defaultProps = {
    settingsState: {theme:LIGHT_MODE},
    settingsActions:jest.fn(),
    languageAction:jest.fn(),
    navigation:jest.fn(),
    languageState: {name: 'vi'}
  };
  const darkProps = {
    ...defaultProps,
    settingsState: {theme:DARK_MODE},
    languageState: {name: 'en'}
  };
  it('renders snapshot as expected', () => {
    const wrapper = renderer.create(
      <SettingComponent {...defaultProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });


  it('renders as expected', () => {
    const wrapper = mount(
      <SettingComponent  {...defaultProps}  />
    );

    expect(wrapper).toMatchSnapshot();

    const witchMode = wrapper.find(Switch).first();
    expect(witchMode.prop('value')).toEqual(false);
    const witchLanguage = wrapper.find(Switch).last();
    expect(witchLanguage.prop('value')).toEqual(true);


  });

});
