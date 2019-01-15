import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Page } from './layout/Page'; 

export default () => (
  // TODO: Add <StrictMode> when material-ui complies
  <Fragment>
    <CssBaseline />
    <Page />
  </Fragment>
  // </StrictMode>
);
