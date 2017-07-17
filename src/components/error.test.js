import React from 'react';
import { mount } from 'enzyme';
import { Error as ErrorComponent } from './error';

describe('Overall Error Element', () => {
  const errorSource = "error source";
  const testError = new Error("test");
  const dismissFunction = jest.fn();
  const wrapper = mount(
    <ErrorComponent 
      source={errorSource}
      error={testError}
      onDismiss={dismissFunction}
    />);
  it('should display the error message', () => {
    expect(wrapper).toIncludeText(testError.toString());
  });
  it('should display the error source', () => {
    expect(wrapper).toIncludeText(errorSource);
  });
  it('should call the dismiss function when the dismiss button is clicked', () => {
    wrapper.find('button.dismiss').simulate('click');
    expect(dismissFunction).toBeCalled();
  });
});