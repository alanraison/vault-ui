import React from 'react';
import { shallow } from 'enzyme';
import Settings from '.';
import LoginMethodSettings from './login-methods';

describe('The settings component', () => {
  it('should have a section for configuring authentication', () => {
    const wrapper = shallow(<Settings loading={false} />);
    expect(wrapper.find(LoginMethodSettings)).toBePresent();
  });
  it('should display a loading spinner when loading settings', () => {
    const wrapper = shallow(<Settings loading onClick={() => null} />);
    expect(wrapper.find('div')).toBePresent();
  });
});
