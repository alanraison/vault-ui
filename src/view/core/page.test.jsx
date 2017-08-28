import React from 'react';
import { shallow } from 'enzyme';
import Page from './page';
import Header from './header';
import Router from './router';

jest.mock('./router');

describe('Page Component', () => {
  Router.mockReturnValue(() => <div />);
  const wrapper = shallow(<Page store={{}} />);
  it('should contain a Header', () => {
    expect(wrapper.find(Header)).toBePresent();
  });
  it('should contain an Initialise component', () => {
    expect(wrapper.find(Router)).toBePresent();
  });
});
