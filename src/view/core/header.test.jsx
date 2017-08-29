import React from 'react';
import { mount } from 'enzyme';
import Header from './header';

describe('The Header component', () => {
  it('should contain a toolbar', () => {
    const wrapper = mount(<Header />);
    expect(wrapper).toIncludeText('Vault');
  });
});
