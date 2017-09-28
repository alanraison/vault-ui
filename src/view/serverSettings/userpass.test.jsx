import React from 'react';
import { shallow } from 'enzyme';
import ToggleableSettings from './toggleable-settings';
import { UserPassSettingsComponent } from './userpass';

describe('Userpass settings', () => {
  it('has title UserPass', () => {
    const [onEnable, onDisable] = [jest.fn(), jest.fn()];

    const wrapper = shallow(
      <UserPassSettingsComponent
        enabled={false}
        onEnable={onEnable}
        onDisable={onDisable}
      />);
    expect(wrapper.find(ToggleableSettings).props().title).toEqual('UserPass');
  });
});
