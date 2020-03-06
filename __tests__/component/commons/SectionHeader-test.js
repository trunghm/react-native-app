/**
 * @format
 */

import 'react-native';
import React from 'react';
import SectionHeader from '../../../src/components/commons/SectionHeader';
import { shallow } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import EStyleSheet from 'react-native-extended-stylesheet';

beforeAll(() => {
  EStyleSheet.build({

  });
});
describe('Testing  SectionHeader component', () => {

  it('renders as expected', () => {
    const wrapper = shallow(
      <SectionHeader text ="Ex: SectionHeader" />
    );

    expect(wrapper).toMatchSnapshot();

  });

});
