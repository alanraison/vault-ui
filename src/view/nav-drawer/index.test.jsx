import React from 'react';
import { shallow } from 'enzyme';
import Drawer from '@material-ui/core/Drawer';
import { NavDrawerComponent } from '.';

describe('NavDrawer component', () => {
  it('should set the open property in the inner Drawer', () => {
    const wrapper = shallow(<NavDrawerComponent open onClose={() => null} />);
    expect(wrapper.find(Drawer).prop('open')).toBe(true);
  });
  it('should not set the open property on the inner drawer if it is not present', () => {
    const wrapper = shallow(<NavDrawerComponent open={false} onClose={() => null} />);
    expect(wrapper.find(Drawer).prop('open')).toBeFalsy();
  });
  it('should pass the onClose handler down to the inner Drawer', () => {
    const onClose = jest.fn();
    const wrapper = shallow(<NavDrawerComponent open={false} onClose={onClose} />);
    expect(wrapper.find(Drawer).prop('onRequestClose')).toBe(onClose);
  });
});
