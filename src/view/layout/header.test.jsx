import React from 'react';
import { shallow } from 'enzyme';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import { HeaderComponent } from './header';

jest.mock('classnames');

describe('The Header component', () => {
  it('should contain a toolbar', () => {
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper.find(Typography).children()).toIncludeText('Vault');
  });
  it('should contain a menu icon', () => {
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper.find(MenuIcon)).toExist();
  });
  it('should call onMenuClick when the menu button is pressed', () => {
    const onMenuClick = jest.fn();
    const wrapper = shallow(<HeaderComponent onMenuClick={onMenuClick} />);
    wrapper.find(IconButton).simulate('click');
    expect(onMenuClick).toHaveBeenCalled();
  });
  it('should not merge the appBarShift classes if the menu is not open', () => {
    const classes = {
      appBar: 'baz',
      appBarShift: 'quux',
      disconnected: 'bar',
    };
    shallow(<HeaderComponent
      menuDrawerOpen={false}
      classes={classes}
      connected
    />);
    expect(classNames).toHaveBeenCalledWith('baz', false, false);
  });
  it('should merge the appBarShift classes if the menu is open', () => {
    const classes = {
      appBar: 'baz',
      appBarShift: 'quux',
      disconnected: 'bar',
    };
    shallow(<HeaderComponent
      menuDrawerOpen
      classes={classes}
      connected
    />);
    expect(classNames).toHaveBeenCalledWith('baz', false, 'quux');
  });
  it('should hide the menu button if the menu drawer is open', () => {
    const classes = {
      menuIcon: 'menuIcon',
      hide: 'hide',
    };
    shallow(<HeaderComponent
      menuDrawerOpen
      classes={classes}
    />);
    expect(classNames).toHaveBeenCalledWith('menuIcon', 'hide');
  });
  it('should show the menu button if the menu drawer is closed', () => {
    const classes = {
      menuIcon: 'bar',
      hide: 'quux',
    };
    shallow(<HeaderComponent
      menuDrawerOpen={false}
      classes={classes}
    />);
    expect(classNames).toHaveBeenCalledWith('bar', false);
  });
  it('should do nothing if no menu click handler has been supplied', () => {
    const wrapper = shallow(<HeaderComponent />);
    wrapper.find(IconButton).simulate('click');
    // No assertion; test for coverage.
  });
});
