import React from 'react';
import { shallow } from 'enzyme';
import { Initialise } from './initialise';
import Err from './error';
import Loading from './loading';
import Unseal from '../../unseal/components';
import Login from '../../login/components';
import Workspace from '../../workspace/components';

jest.mock('./error');
jest.mock('../../unseal/components');

Err.mockReturnValue(() => <div/>);
Unseal.mockReturnValue(() => <div/>);

describe('The Initialise component', () => {
  it('should show the Error compoment when there is an error', () => {
    const e = new Error("test error")
    const wrapper = shallow(<Initialise error={e} />);
    expect(wrapper.find(Err)).toBePresent();
    expect(wrapper.find(Loading)).not.toBePresent();
    expect(wrapper.find(Unseal)).not.toBePresent();
    expect(wrapper.find(Login)).not.toBePresent();
    expect(wrapper.find(Workspace)).not.toBePresent();
  });
  it('should show the loading component when loading', () => {
    const wrapper = shallow(<Initialise loading={true} />);
    expect(wrapper.find(Err)).not.toBePresent();
    expect(wrapper.find(Loading)).toBePresent();
    expect(wrapper.find(Unseal)).not.toBePresent();
    expect(wrapper.find(Login)).not.toBePresent();
    expect(wrapper.find(Workspace)).not.toBePresent();
  })
  it('should show the unseal component when vault is sealed', () => {
    const wrapper = shallow(<Initialise sealed={true}/>);
    expect(wrapper.find(Err)).not.toBePresent();
    expect(wrapper.find(Loading)).not.toBePresent();
    expect(wrapper.find(Unseal)).toBePresent();
    expect(wrapper.find(Login)).not.toBePresent();
    expect(wrapper.find(Workspace)).not.toBePresent();
  });
  it('should show login when unuathenticated', () => {
    const wrapper = shallow(<Initialise unauthenticated={true}/>);
    expect(wrapper.find(Err)).not.toBePresent();
    expect(wrapper.find(Loading)).not.toBePresent();
    expect(wrapper.find(Unseal)).not.toBePresent();
    expect(wrapper.find(Login)).toBePresent();
    expect(wrapper.find(Workspace)).not.toBePresent();
  });
  it('should show the workspace when ready', () => {
    const wrapper = shallow(<Initialise ready={true}/>);
    expect(wrapper.find(Err)).not.toBePresent();
    expect(wrapper.find(Loading)).not.toBePresent();
    expect(wrapper.find(Unseal)).not.toBePresent();
    expect(wrapper.find(Login)).not.toBePresent();
    expect(wrapper.find(Workspace)).toBePresent();
  });
});