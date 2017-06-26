import React from 'react';
import Toolbar from '@react-mdc/toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';

export default () => (
  <Toolbar>
    <Toolbar.Row>
      <Toolbar.Section align="start">
        <a href="#/"><i className="logo"/></a>
        <Toolbar.Title>Vault</Toolbar.Title>
      </Toolbar.Section>
    </Toolbar.Row>
  </Toolbar>
)