import React from 'react';
import { shallow } from 'enzyme';
import { PageComponent } from './page';
import Header from './header';
import Router from '../core/router';

jest.mock('../core/router');

describe('Page Component', () => {
  Router.mockReturnValue(() => <div />);
  const wrapper = shallow(<PageComponent store={{}} />);
  it('should contain a Header', () => {
    expect(wrapper.find(Header)).toBePresent();
  });
  it('should contain an Initialise component', () => {
    expect(wrapper.find(Router)).toBePresent();
  });
});
