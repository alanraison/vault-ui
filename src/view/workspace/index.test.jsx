import React from 'react';
import { shallow } from 'enzyme';
import { WorkspaceComponent } from '.';

describe('Workspace component', () => {
  it('should use all columns', () => {
    const wrapper = shallow(<WorkspaceComponent />);
    expect(wrapper.find('#address').prop('xs')).toBe(12);
  });
});
