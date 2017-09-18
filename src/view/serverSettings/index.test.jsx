import React from 'react';
import { shallow } from 'enzyme';
import { CardHeader } from 'material-ui/Card';
import Settings from '.';

describe('The settings component', () => {
  it('should have a section for configuring authentication', () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper.find(CardHeader).find({ title: 'Login Methods' })).toBePresent();
  });
});
