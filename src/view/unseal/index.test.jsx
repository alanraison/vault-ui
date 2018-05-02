import React from 'react';
import { shallow, mount } from 'enzyme';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { UnsealComponent } from '.';
import UnsealCount from './count';

jest.mock('./count');

describe('Unseal component', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const wrapper = shallow(<UnsealComponent
    onChangeKey={onChange}
    onSubmit={onClick}
    unsealKey="key"
  />);
  afterEach(() => {
    onClick.mockReset();
    onChange.mockReset();
  });
  it('should contain a count of the outstanding unseal keys required', () => {
    const mounted = mount(<UnsealComponent unsealKey="" onChangeKey={onChange} onSubmit={onClick} />);
    expect(mounted.find(UnsealCount)).toExist();
  });
  it('should contain an input field for an unseal key', () => {
    expect(wrapper.find(TextField)).toExist();
  });
  it('should contain an action button', () => {
    expect(wrapper.find(Button)).toExist();
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
