import React from 'react';
import Toolbar from '@react-mdc/toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';

export default () => (
  <Toolbar>
    <Toolbar.Row>
      <Toolbar.Section align="start">
        <i className="material-icons">lock</i>
        <Toolbar.Title>Vault</Toolbar.Title>
      </Toolbar.Section>
    </Toolbar.Row>
  </Toolbar>
)