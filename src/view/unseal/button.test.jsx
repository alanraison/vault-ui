import React from 'react';
import { mount } from 'enzyme';
import { UnsealButtonComponent } from './button';

test('onClick handler invoked with key prop', () => {
  const onClick = jest.fn();
  const wrapper = mount(<UnsealButtonComponent unsealKey="key" onClick={onClick} />);

  wrapper.find('button').simulate('click');
  expect(onClick).toBeCalled();
});
