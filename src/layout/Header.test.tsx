import React from 'react';
import { render } from '../utils/test-utils';
import Header from './Header';

const noop = () => null;

test('it should indicate when vault is connected', () => {
  const { getByTestId } = render(
    <Header
      loading={false}
      connected={false}
      menuDrawerOpen={false}
      classes={{
        appBar: '',
        appBarShift: '',
      }}
      onMenuClick={noop}
    />
  );
  getByTestId('')
})

test('when the user is logged out there should not be a profile menu', () => {
  const { getByTestId } = render(
    <Header
      loading={false}
      connected={true}
      menuDrawerOpen={false}
      classes={{
        appBar: '',
        appBarShift: '',
      }}
      onMenuClick={noop}
    />
  );
  expect(getByTestId('profile-menu')).toBeNull();
})