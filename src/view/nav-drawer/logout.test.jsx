import React from 'react';
import { shallow } from 'enzyme';
import ExitToApp from 'material-ui-icons/ExitToApp';
import { LogoutMenuComponent } from './logout';

describe('Logout menu component', () => {
  it('should contain the ExitToApp icon', () => {
    const wrapper = shallow(<LogoutMenuComponent />);
    expect(wrapper.find(ExitToApp)).toBePresent();
  });
});
