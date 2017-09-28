import React from 'react';
import { shallow } from 'enzyme';
import Settings from '.';
import LoginMethodSettings from './login-methods';

describe('The settings component', () => {
  it('should have a section for configuring authentication', () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper.find(LoginMethodSettings)).toBePresent();
  });
});
