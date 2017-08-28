import React from 'react';
import { shallow } from 'enzyme';
import { RouterContainer as Router } from './router';
import Err from './error';
import Loading from './loading';
import Unseal from '../unseal';
import Login from '../login';
import Workspace from '../workspace';

jest.mock('./error');
jest.mock('../unseal');

Err.mockReturnValue(() => <div />);
Unseal.mockReturnValue(() => <div />);

xdescribe('The Initialise component', () => {
  it('should show the Error compoment when there is an error', () => {
    const e = new Error('test error');
    const wrapper = shallow(<Router error={e} />);
    expect(wrapper.find(Err)).toBePresent();
    expect(wrapper.find(Loading)).not.toBePresent();
    expect(wrapper.find(Unseal)).not.toBePresent();
    expect(wrapper.find(Login)).not.toBePresent();
    expect(wrapper.find(Workspace)).not.toBePresent();
  });
  it('should show the loading component when loading', () => {
    const wrapper = shallow(<Router loading />);
    expect(wrapper.find(Err)).not.toBePresent();
    expect(wrapper.find(Loading)).toBePresent();
    expect(wrapper.find(Unseal)).not.toBePresent();
    expect(wrapper.find(Login)).not.toBePresent();
    expect(wrapper.find(Workspace)).not.toBePresent();
  });
  it('should show the unseal component when vault is sealed', () => {
    const wrapper = shallow(<Router sealed />);
    expect(wrapper.find(Err)).not.toBePresent();
    expect(wrapper.find(Loading)).not.toBePresent();
    expect(wrapper.find(Unseal)).toBePresent();
    expect(wrapper.find(Login)).not.toBePresent();
    expect(wrapper.find(Workspace)).not.toBePresent();
  });
  it('should show login when unuathenticated', () => {
    const wrapper = shallow(<Router unauthenticated />);
    expect(wrapper.find(Err)).not.toBePresent();
    expect(wrapper.find(Loading)).not.toBePresent();
    expect(wrapper.find(Unseal)).not.toBePresent();
    expect(wrapper.find(Login)).toBePresent();
    expect(wrapper.find(Workspace)).not.toBePresent();
  });
  it('should show the workspace when ready', () => {
    const wrapper = shallow(<Router ready />);
    expect(wrapper.find(Err)).not.toBePresent();
    expect(wrapper.find(Loading)).not.toBePresent();
    expect(wrapper.find(Unseal)).not.toBePresent();
    expect(wrapper.find(Login)).not.toBePresent();
    expect(wrapper.find(Workspace)).toBePresent();
  });
});
