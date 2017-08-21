import React from 'react';
import { mount } from 'enzyme';
import { UnsealButton } from './unseal-button';

test('onClick handler invoked with key prop', () => {
  const onClick = jest.fn();
  const wrapper = mount(<UnsealButton key="key" onClick={onClick} />);

  wrapper.find('button').simulate('click');
  expect(onClick).toBeCalled();
});
