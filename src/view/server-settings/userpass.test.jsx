import React from 'react';
import { shallow } from 'enzyme';
import ToggleableSettings from './toggleable-settings';
import { UserPassSettingsComponent } from './userpass';

describe('Userpass settings', () => {
  it('has title UserPass', () => {
    const onEnable = jest.fn();
    const onDisable = jest.fn();

    const wrapper = shallow(
      <UserPassSettingsComponent
        enabled={false}
        onEnable={onEnable}
        onDisable={onDisable}
      />);
    expect(wrapper.find(ToggleableSettings).props().title).toEqual('UserPass');
  });
});
