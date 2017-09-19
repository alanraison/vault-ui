import React from 'react';
import { shallow } from 'enzyme';
import IconButton from 'material-ui/IconButton';
import { SettingsMenuComponent } from './settings';

describe('the settings menu component', () => {
  it('should open the menu when the icon button is clicked', () => {
    const wrapper = shallow(<SettingsMenuComponent />);
    wrapper.find(IconButton).simulate('click', { target: wrapper });
    expect(wrapper.state().open).toBeTruthy();
  });
});
