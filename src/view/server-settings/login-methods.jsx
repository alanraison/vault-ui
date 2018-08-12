import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import UserPassSettings from './userpass';

export function LoginMethodsComponent() {
  return (
    <List subheader={<ListSubheader>Login Methods</ListSubheader>}>
      <UserPassSettings />
    </List>
  );
}

export default LoginMethodsComponent;
