import React from 'react';
import { mount } from 'enzyme';
import { TokenEntryComponent as TokenEntry } from './token';

describe('Token Entry component', () => {
  it('should display the token value', () => {
    const expectedValue = 'TEST VALUE';
    const wrapper = mount(<TokenEntry value={expectedValue} onChange={() => null} />);
    expect(wrapper.find('input')).toHaveValue(expectedValue);
  });
  it('should call the change handler on change', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(<TokenEntry value="" onChange={changeHandler} />);
    const mockValue = 'mock value';
    const mockEvent = {
      target: {
        value: mockValue,
      },
    };

    wrapper.find('input').simulate('change', mockEvent);

    expect(changeHandler).toHaveBeenCalledWith(mockValue);
  });
});
