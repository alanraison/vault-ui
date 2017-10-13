import React from 'react';
import { mount } from 'enzyme';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { UnsealComponent } from '.';
import UnsealCount from './count';

jest.mock('./count');

describe('Unseal component', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const wrapper = mount(<UnsealComponent
    onChangeKey={onChange}
    onSubmit={onClick}
    unsealKey="key"
  />);
  afterEach(() => {
    onClick.mockReset();
    onChange.mockReset();
  });
  it('should contain a count of the outstanding unseal keys required', () => {
    expect(wrapper.find(UnsealCount)).toBePresent();
  });
  it('should contain an input field for an unseal key', () => {
    expect(wrapper.find(TextField)).toBePresent();
  });
  it('should contain an action button', () => {
    expect(wrapper.find(Button)).toBePresent();
  });
  it('should invoke onSubmit handler with key prop', () => {
    wrapper.find(Button).simulate('click');
    expect(onClick).toHaveBeenCalledWith('key');
  });
  it('should update the state when the input value changes', () => {
    wrapper.find(TextField).simulate('change', { target: { value: 'wibble' } });
    expect(onChange).toHaveBeenCalledWith('wibble');
  });
});
