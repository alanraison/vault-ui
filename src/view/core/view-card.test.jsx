import React from 'react';
import { shallow } from 'enzyme';
import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';

import { ViewCardComponent } from './view-card';

describe('A View Card', () => {
  it('should have a card element inside a grid item', () => {
    const wrapper = shallow(<ViewCardComponent />);
    expect(wrapper.find(Grid).find({ item: true })).toBePresent();
    expect(wrapper.find(Grid).find(Card)).toBePresent();
  });
  it('should default to half with for md viewports and full width for xs', () => {
    const wrapper = shallow(<ViewCardComponent />);
    expect(wrapper.find(Grid)).toHaveProp('md', 6);
    expect(wrapper.find(Grid)).toHaveProp('xs', 12);
  });
  it('should be possible to override the default card width', () => {
    const wrapper = shallow(<ViewCardComponent xs={4} md={2} xl={12} />);
    expect(wrapper.find(Grid)).toHaveProp('md', 2);
    expect(wrapper.find(Grid)).toHaveProp('xs', 4);
    expect(wrapper.find(Grid)).toHaveProp('xl', 12);
  });
  it('should render children inside the Card element', () => {
    const wrapper = shallow(<ViewCardComponent>
      <a href="https://github.com/alanraison/vault-ui">Vault UI</a>
    </ViewCardComponent>);
    expect(wrapper.find(Card)).toContainReact(<a href="https://github.com/alanraison/vault-ui">Vault UI</a>);
  });
});
