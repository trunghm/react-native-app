/**
 * @format
 */

import 'react-native';
import React from 'react';
import UserControl from '../../../../src/components/hocs/UserControl';

// Note: test renderer must be required after react-native.
import {mount, shallow} from 'enzyme';
import renderer from  "react-test-renderer";
import EStyleSheet from 'react-native-extended-stylesheet';


const originalError = console.error;

beforeAll(() => {
  console.error = jest.fn();
  EStyleSheet.build({
  });
});

afterAll(() => {
  console.error = originalError;
});

describe('Testing  UserControl component', () => {

  it('renders snapshot as expected', () => {
    const wrapper = renderer.create(
      <UserControl active={true}/>
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('renders as expected', () => {
    const wrapper = mount(
      <UserControl active={true}/>
    );

    expect(wrapper).toMatchSnapshot();
    expect( wrapper
      .findWhere((w) => w.prop('text') === 'Deactive User')
      .first().prop('disabled') ).toEqual(false);
    expect( wrapper
      .findWhere((w) => w.prop('text') === 'Active User')
      .first().prop('disabled') ).toEqual(true);

  });

});
