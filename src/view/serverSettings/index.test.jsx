import React from 'react';
import { shallow } from 'enzyme';
import List, { ListSubheader } from 'material-ui/List';
import Settings from '.';

describe('The settings component', () => {
  it('should have a section for configuring authentication', () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper.find(List)
      .find({ subheader: <ListSubheader>Login Methods</ListSubheader> })).toBePresent();
  });
});
