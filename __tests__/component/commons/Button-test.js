/**
 * @format
 */

import 'react-native';
import React from 'react';
import Button from '../../../src/components/commons/Button';

// Note: test renderer must be required after react-native.
import { shallow } from 'enzyme';
import EStyleSheet from 'react-native-extended-stylesheet';

beforeAll(() => {
  EStyleSheet.build({

  });
});
describe('Testing  Button component', () => {

  it('renders as expected', () => {
    const wrapper = shallow(
      <Button text ="Ex: Button" />
    );

    expect(wrapper).toMatchSnapshot();

  });

});
