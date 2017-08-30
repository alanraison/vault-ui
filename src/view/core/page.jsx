import React from 'react';
import Grid from 'material-ui/Grid';

import Header from './header';
import Router from './router';

export default function PageComponent() {
  return (
    <div>
      <Header />
      <Grid container>
        <Router />
      </Grid>
    </div>
  );
}
