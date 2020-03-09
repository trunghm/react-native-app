/**
 * @format
 */

import 'react-native';
import React from 'react';
import GroupButton from '../../../src/components/modules/GroupButton';

// Note: test renderer must be required after react-native.
import { mount } from 'enzyme';
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

describe('Testing  GroupButton component', () => {

  it('renders as expected', () => {
    const wrapper = mount(
      <GroupButton data={["button1", "button2"] } index ={1} />
    );

    expect(wrapper).toMatchSnapshot();

    expect( wrapper
      .findWhere((w) => w.prop('text') === 'button1')
      .first().prop('disabled') ).toEqual(true);

    expect( wrapper
      .findWhere((w) => w.prop('text') === 'button2')
      .first().prop('disabled') ).toEqual(false);


  });

});
