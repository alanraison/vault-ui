import React from 'react';
import { shallow } from 'enzyme';
import { ProfileMenuComponent } from './profile-menu';

describe('The Profile Menu component', () => {
  it('should render nothing when logged out', () => {
    const wrapper = shallow(<ProfileMenuComponent loggedIn={false} />);
    expect(wrapper).toBeEmptyRender();
  });

  it('should display when logged in', () => {
    const wrapper = shallow(<ProfileMenuComponent loggedIn />);
    expect(wrapper).not.toBeEmptyRender();
  });
});
