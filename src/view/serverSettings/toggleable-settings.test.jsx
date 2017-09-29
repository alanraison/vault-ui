import React from 'react';
import { mount } from 'enzyme';
import Switch from 'material-ui/Switch';
import { ToggleableSettingsComponent } from './toggleable-settings';

describe('A toggleable setting', () => {
  it('should enable on switch click', () => {
    const onEnable = jest.fn();
    const onDisable = jest.fn();

    const wrapper = mount(
      <ToggleableSettingsComponent
        enabled={false}
        onEnable={onEnable}
        onDisable={onDisable}
      />);
    wrapper.find(Switch).find('input').simulate('change');
    expect(onEnable).toHaveBeenCalled();
    expect(onDisable).not.toHaveBeenCalled();
  });
  it('should disable on switch click', () => {
    const onEnable = jest.fn();
    const onDisable = jest.fn();

    const wrapper = mount(
      <ToggleableSettingsComponent
        enabled
        onEnable={onEnable}
        onDisable={onDisable}
      />);
    wrapper.find(Switch).find('input').simulate('change');
    expect(onEnable).not.toHaveBeenCalled();
    expect(onDisable).toHaveBeenCalled();
  });
});
