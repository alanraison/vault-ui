import React from 'react';
import { shallow } from 'enzyme';
import { WorkspaceComponent } from '.';
import ViewCard from '../core/view-card';

describe('Workspace component', () => {
  it('should use all columns', () => {
    const wrapper = shallow(<WorkspaceComponent />);
    expect(wrapper.find(ViewCard).prop('xs')).toBe(12);
  });
});
