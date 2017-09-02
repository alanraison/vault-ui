import React from 'react';
import { shallow } from 'enzyme';
import { UnsealCountComponent } from './count';

it('should render the count', () => {
  let wrapper = shallow(<UnsealCountComponent count={1} />);
  expect(wrapper.text()).toMatch(/1/);
  expect(wrapper.text()).not.toMatch(/9/);

  wrapper = shallow(<UnsealCountComponent count={9} />);
  expect(wrapper.text()).not.toMatch(/1/);
  expect(wrapper.text()).toMatch(/9/);
});
