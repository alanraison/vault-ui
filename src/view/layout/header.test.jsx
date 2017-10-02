import React from 'react';
import { shallow } from 'enzyme';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import { HeaderComponent } from './header';

describe('The Header component', () => {
  it('should contain a toolbar', () => {
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper.find(Typography).children()).toIncludeText('Vault');
  });
  it('should contain a menu icon', () => {
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper.find(MenuIcon)).toBePresent();
  });
  it('should call onMenuClick when the menu button is pressed', () => {
    const onMenuClick = jest.fn();
    const wrapper = shallow(<HeaderComponent onMenuClick={onMenuClick} />);
    wrapper.find(IconButton).simulate('click');
    expect(onMenuClick).toHaveBeenCalled();
  });
});
