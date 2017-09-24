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
  describe('when the server settings component is clicked', () => {
    it('closes the menu', () => {
      const wrapper = shallow(<SettingsMenuComponent />).setState({ open: true });
      wrapper.find('#server-settings').simulate('click');
      expect(wrapper.state().open).toBeFalsy();
    });
    it('calls the onSettingsClick prop function', () => {
      const onSettingsClick = jest.fn();
      const wrapper = shallow(<SettingsMenuComponent onSettingsClick={onSettingsClick} />)
        .setState({ open: true });
      wrapper.find('#server-settings').simulate('click');
      expect(onSettingsClick).toHaveBeenCalled();
    });
  });
  describe('when the user settings component is clicked', () => {
    it('closes the menu', () => {
      const wrapper = shallow(<SettingsMenuComponent />).setState({ open: true });
      wrapper.find('#user-settings').simulate('click');
      expect(wrapper.state().open).toBeFalsy();
    });
  });
});
