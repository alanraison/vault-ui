import React from 'react';
import { mount } from 'enzyme';
import { PlainUnsealButton } from './unseal-button';

test('onClick handler invoked with key prop', () => {
  const onClick = jest.fn();
  const wrapper = mount(<PlainUnsealButton key="key" onClick={onClick} />);

  wrapper.find('button').simulate('click');
  expect(onClick).toBeCalled();
});
