import React from 'react';
import { shallow } from 'enzyme';
import Chip from '@material-ui/core/Chip';

import { PoliciesComponent } from './policies';

describe('Policies entry', () => {
  it('should list all policies in the state', () => {
    const wrapper = shallow(<PoliciesComponent policies={['read_all_secrets', 'write_all_secrets']} />);
    expect(wrapper.containsAllMatchingElements([
      <Chip label="read_all_secrets" />,
      <Chip label="write_all_secrets" />,
    ])).toBeTruthy();
  });
});
