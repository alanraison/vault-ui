import React from 'react';
import { mount } from 'enzyme';
import Unseal from './';
import UnsealCount from './unseal-count';
import UnsealButton from './unseal-button';
import UnsealInput from './unseal-input';

jest.mock('./unseal-count');
jest.mock('./unseal-button');
jest.mock('./unseal-input');

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
