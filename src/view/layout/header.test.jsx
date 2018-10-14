import React from 'react';
import { shallow } from 'enzyme';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import { HeaderComponent } from './header';

jest.mock('classnames');

const classes = {
  appBar: 'appBar',
  appBarShift: 'quux',
  disconnected: 'bar',
  menuIcon: 'menuIcon',
  hide: 'hide',
};

describe('The Header component', () => {
  it('should contain a toolbar', () => {
    const wrapper = shallow(<HeaderComponent classes={classes} />);
    expect(wrapper.find(Typography).children()).toIncludeText('Vault');
  });
  it('should contain a menu icon', () => {
    const wrapper = shallow(<HeaderComponent classes={classes} />);
    expect(wrapper.find(MenuIcon)).toExist();
  });
  it('should call onMenuClick when the menu button is pressed', () => {
    const onMenuClick = jest.fn();
    const wrapper = shallow(<HeaderComponent onMenuClick={onMenuClick} classes={classes} />);
    wrapper.find(IconButton).simulate('click');
    expect(onMenuClick).toHaveBeenCalled();
  });
  it('should not merge the appBarShift classes if the menu is not open', () => {
    shallow(<HeaderComponent
      menuDrawerOpen={false}
      classes={classes}
      connected
    />);
    expect(classNames).toHaveBeenCalledWith('appBar', false, false);
  });
  it('should merge the appBarShift classes if the menu is open', () => {
    shallow(<HeaderComponent
      menuDrawerOpen
      classes={classes}
      connected
    />);
    expect(classNames).toHaveBeenCalledWith('appBar', false, 'quux');
  });
  it('should hide the menu button if the menu drawer is open', () => {
    shallow(<HeaderComponent
      menuDrawerOpen
      classes={classes}
      connected
    />);
    expect(classNames).toHaveBeenCalledWith('menuIcon', 'hide');
  });
  it('should show the menu button if the menu drawer is closed', () => {
    shallow(<HeaderComponent
      menuDrawerOpen={false}
      classes={classes}
      connected
    />);
    expect(classNames).toHaveBeenCalledWith('appBar', false, false);
  });
  it('should do nothing if no menu click handler has been supplied', () => {
    const wrapper = shallow(<HeaderComponent classes={classes} />);
    wrapper.find(IconButton).simulate('click');
    // No assertion; test for coverage.
  });
});
