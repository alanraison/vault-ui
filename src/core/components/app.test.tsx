jest.mock('./page');

import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './app';
// import Page from './page';

// (Page as jest.Mock<any>).mockReturnValue(() => <div/>);

describe('App component', () => {
  it('should fire the on load function when mounted', () => {
    const onReady = jest.fn();
    shallow(<App onReady={onReady} sealed={null}/>, {
      lifecycleExperimental: true,
    });
    expect(onReady).toHaveBeenCalled();
  });
})