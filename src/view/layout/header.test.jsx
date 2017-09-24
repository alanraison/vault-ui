import React from 'react';
import { shallow } from 'enzyme';
import Typography from 'material-ui/Typography';

import { HeaderComponent } from './header';
import Settings from '../core/settings';

describe('The Header component', () => {
  it('should contain a toolbar', () => {
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper.find(Typography).children()).toIncludeText('Vault');
  });
  describe('when logged in', () => {
    it('should contain the settings link', () => {
      const wrapper = shallow(<HeaderComponent loggedIn />);
      expect(wrapper.find(Settings)).toBePresent();
    });
  });
  describe('when not logged in', () => {
    it('should not contain the settings link', () => {
      const wrapper = shallow(<HeaderComponent />);
      expect(wrapper.find(Settings)).not.toBePresent();
    });
  });
});
