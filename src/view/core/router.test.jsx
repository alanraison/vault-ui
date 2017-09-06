import React from 'react';
import { shallow } from 'enzyme';
import { NOT_FOUND } from 'redux-first-router';

import { RouteContainer, routesMap } from './router';
import * as actions from '../../actions/core';
import Loading from './loading';

describe('The core page router', () => {
  it('should display something if no routes match', () => {
    const wrapper = shallow(<RouteContainer route="SOME UNKNOWN ROUTE" />);
    expect(wrapper).toContainReact(React.createElement(routesMap[NOT_FOUND]));
  });
  it('should display the desired components when the actions are found', () => {
    const wrapper = shallow(<RouteContainer route={actions.INITIALISE} />);
    expect(wrapper).toContainReact(<Loading />);
  });
});
