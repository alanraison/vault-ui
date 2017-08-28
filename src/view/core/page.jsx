import React from 'react';
import Typography from '@react-mdc/typography';
import '@material/typography/dist/mdc.typography.css';

import Header from './header';
import Router from './router';

export default function PageComponent() {
  return (
    <Typography>
      <Header />
      <Router />
    </Typography>
  );
}
