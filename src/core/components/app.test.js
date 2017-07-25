import React from 'react';
import { shallow } from 'enzyme';
import { App } from './app';
import Page from './page';

jest.mock('./page');
Page.mockReturnValue(() => <div/>);

describe('App component', () => {
  it('should fire the on load function when mounted', () => {
    const onReady = jest.fn();
    const wrapper = shallow(<App onReady={onReady} sealed={null}/>, {
      lifecycleExperimental: true,
    });
    expect(onReady).toHaveBeenCalled();
  });
})