import React from 'react';
import { shallow } from 'enzyme';
import Switch from '@material-ui/core/Switch';
import ListItemText from '@material-ui/core/ListItemText';
import { ToggleableSettingsComponent } from './toggleable-settings';

describe('A toggleable setting', () => {
  it('should enable on switch click', () => {
    const onEnable = jest.fn();
    const onDisable = jest.fn();

    const wrapper = shallow(<ToggleableSettingsComponent
      enabled={false}
      onEnable={onEnable}
      onDisable={onDisable}
    />);
    wrapper.find(Switch).simulate('change');
    expect(onEnable).toHaveBeenCalled();
    expect(onDisable).not.toHaveBeenCalled();
  });
  it('should disable on switch click', () => {
    const onEnable = jest.fn();
    const onDisable = jest.fn();

    const wrapper = shallow(<ToggleableSettingsComponent
      enabled
      onEnable={onEnable}
      onDisable={onDisable}
    />);
    wrapper.find(Switch).simulate('change');
    expect(onEnable).not.toHaveBeenCalled();
    expect(onDisable).toHaveBeenCalled();
  });
  it('should set open state on click', () => {
    const wrapper = shallow(<ToggleableSettingsComponent
      enabled={false}
      onEnable={() => null}
      onDisable={() => null}
    />);
    wrapper.find(ListItemText).simulate('click');
    expect(wrapper.state().open).toBeTruthy();
  });
  it('should unset open state on click when open', () => {
    const wrapper = shallow(<ToggleableSettingsComponent
      enabled={false}
      onEnable={() => null}
      onDisable={() => null}
    />).setState({ open: true });
    wrapper.find(ListItemText).simulate('click');
    expect(wrapper.state().open).toBeFalsy();
  });
});
