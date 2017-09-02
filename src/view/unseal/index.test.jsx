import React from 'react';
import { mount } from 'enzyme';
import Unseal from './';
import UnsealCount from './count';
import UnsealButton from './button';
import UnsealInput from './input';

jest.mock('./count');
jest.mock('./button');
jest.mock('./input');

describe('Unseal component', () => {
  const wrapper = mount(<Unseal />);
  it('should contain a count of the outstanding unseal keys required', () => {
    expect(wrapper.find(UnsealCount)).toBePresent();
  });
  it('should contain an input field for an unseal key', () => {
    expect(wrapper.find(UnsealInput)).toBePresent();
  });
  it('should contain an action button', () => {
    expect(wrapper.find(UnsealButton)).toBePresent();
  });
});
