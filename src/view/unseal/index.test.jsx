import React from 'react';
import { shallow, mount } from 'enzyme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UnsealComponent } from '.';
import UnsealCount from './count';

jest.mock('./count');

describe('Unseal component', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const wrapper = shallow(<UnsealComponent
    onSubmit={onClick}
  />);
  afterEach(() => {
    onClick.mockReset();
    onChange.mockReset();
  });
  it('should contain a count of the outstanding unseal keys required', () => {
    const mounted = mount(<UnsealComponent onSubmit={onClick} />);
    expect(mounted.find(UnsealCount)).toExist();
  });
  it('should contain an input field for an unseal key', () => {
    expect(wrapper.find(TextField)).toExist();
  });
  it('should contain an action button', () => {
    expect(wrapper.find(Button)).toExist();
  });
  it('should invoke onSubmit handler with key prop', () => {
    wrapper.setState({ key: 'key' });
    wrapper.find(Button).simulate('click');
    expect(onClick).toHaveBeenCalledWith('key');
  });
});
