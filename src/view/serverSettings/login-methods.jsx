import React from 'react';
import List, { ListSubheader } from 'material-ui/List';
import UserPassSettings from './userpass';

export function LoginMethodsComponent() {
  return (
    <List subheader={<ListSubheader>Login Methods</ListSubheader>}>
      <UserPassSettings />
    </List>
  );
}

export default LoginMethodsComponent;
