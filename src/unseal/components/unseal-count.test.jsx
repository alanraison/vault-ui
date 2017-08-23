import React from 'react';
import { shallow } from 'enzyme';
import { PlainUnsealCount } from './unseal-count';

it('should render the count', () => {
  let wrapper = shallow(<PlainUnsealCount count="1" />);
  expect(wrapper.text()).toMatch(/1/);
  expect(wrapper.text()).not.toMatch(/9/);

  wrapper = shallow(<PlainUnsealCount count="9" />);
  expect(wrapper.text()).not.toMatch(/1/);
  expect(wrapper.text()).toMatch(/9/);
});
