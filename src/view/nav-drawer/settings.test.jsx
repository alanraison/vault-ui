import React from 'react';
import { shallow } from 'enzyme';
import Settings from 'material-ui-icons/Settings';
import { SettingsMenuComponent } from './settings';

describe('Settings menu component', () => {
  it('should use a Settings icon', () => {
    const wrapper = shallow(<SettingsMenuComponent onClick={() => null} />);
    expect(wrapper.find(Settings)).toBePresent();
  });
  it('should call onClick handler on click action', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<SettingsMenuComponent onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
