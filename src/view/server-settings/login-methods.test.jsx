import React from 'react';
import { shallow } from 'enzyme';
import { ListSubheader } from 'material-ui/List';
import { LoginMethodsComponent } from './login-methods';

jest.mock('./userpass');

describe('The login methods settings component', () => {
  it('should have a header indicating that it is the Login method configuration', () => {
    const wrapper = shallow(<LoginMethodsComponent />);
    expect(wrapper
      .find({ subheader: <ListSubheader>Login Methods</ListSubheader> })).toExist();
  });
});
