import React from 'react';
import { mount } from 'enzyme';
import TextField from 'material-ui/TextField';
import UserPassLogin from './userpass';

describe('The userpass login component', () => {
  it('should have a username entry field', () => {
    const wrapper = mount(<UserPassLogin />);
    expect(wrapper.find(TextField).find('#username')).toExist();
  });
});
