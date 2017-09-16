import React from 'react';
import { mount } from 'enzyme';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { UnsealComponent } from '.';
import UnsealCount from './count';

const store = {
  dispatch: jest.fn(),
  subscribe: jest.fn(),
  getState: jest.fn(() => ({
    app: { sealStatus: { sealInfo: { t: 2, progress: 1 } } },
  })),
};
UnsealComponent.prototype.getChildContext = () => ({ store });
UnsealComponent.childContextTypes = ({ store: PropTypes.shape({
  dispatch: PropTypes.func,
  subscribe: PropTypes.func,
  getState: PropTypes.func,
}) });

describe('Unseal component', () => {
  const state = { unseal: 'key' };
  const onClick = jest.fn();
  const wrapper = mount(<UnsealComponent onSubmit={onClick} />, { context: store }).setState(state);
  afterEach(() => {
    onClick.mockReset();
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
    expect(wrapper.state().unseal).toEqual('wibble');
  });
});
