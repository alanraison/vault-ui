import React from 'react';
import { shallow } from 'enzyme';
import { PageComponent } from './page';
import Header from './header';
import NavDrawer from '../nav-drawer';
import Router from '../core/router';

jest.mock('../core/router');
jest.mock('../nav-drawer');
Router.mockReturnValue(() => <div />);
NavDrawer.mockReturnValue(() => <div />);

describe('Page Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PageComponent store={{}} />);
  });
  it('should contain a Header', () => {
    expect(wrapper.find(Header)).toBePresent();
  });
  it('should contain a Router component', () => {
    expect(wrapper.find(Router)).toBePresent();
  });
  it('should not have the NavDrawer open by default', () => {
    expect(wrapper.state().drawerOpen).toBeFalsy();
  });
  it('should open the NavDrawer when the menu button is clicked', () => {
    wrapper.find(Header).prop('onMenuClick')();
    expect(wrapper.state().drawerOpen).toBeTruthy();
  });
  it('should close the NavDrawer onRequestClose', () => {
    wrapper.setState({ drawerOpen: true });
    wrapper.find(NavDrawer).prop('onClose')();
    expect(wrapper.state().drawerOpen).toBeFalsy();
  });
});
