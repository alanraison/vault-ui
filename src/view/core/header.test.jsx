import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('The Header component', () => {
  it('should contain a toolbar', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveTagName('Toolbar');
  });
});
