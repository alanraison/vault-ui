import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

export default function HeaderComponent() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="contrast" aria-label="menu">
          <i className="material-icons">lock</i>
        </IconButton>
        <Typography type="title" color="inherit">
          Vault
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
