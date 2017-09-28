import React from 'react';
import { mount } from 'enzyme';
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
    wrapper.find('input[type="checkbox"]').simulate('change');
    expect(onEnable).toHaveBeenCalled();
    expect(onDisable).not.toHaveBeenCalled();
  });
});
