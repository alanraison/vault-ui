import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { HeaderComponent } from './header';
import Settings from '../core/settings';

const store = {
  dispatch: jest.fn(),
  subscribe: jest.fn(),
  getState: jest.fn(),
};

HeaderComponent.prototype.getChildContext = () => ({ store });

describe('The Header component', () => {
  it('should contain a toolbar', () => {
    const wrapper = mount(<Provider store={store}>
      <HeaderComponent classes={{ flex: 'flex: 1' }} />
    </Provider>);
    expect(wrapper).toIncludeText('Vault');
  });
  describe('when logged in', () => {
    it('should contain the settings link', () => {
      const wrapper = mount(<Provider store={store}>
        <HeaderComponent classes={{ flex: 'flex: 1' }} loggedIn />
      </Provider>);
      expect(wrapper.find(Settings)).toBePresent();
    });
  });
  describe('when not logged in', () => {
    it('should not contain the settings link', () => {
      const wrapper = mount(<Provider store={store}>
        <HeaderComponent classes={{ flex: 'flex: 1' }} />
      </Provider>);
      expect(wrapper.find(Settings)).not.toBePresent();
    });
  });
});
