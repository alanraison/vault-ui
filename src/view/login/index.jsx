import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader, CardContent } from 'material-ui/Card';
import ViewCard from '../core/view-card';
import Router from './router';

export function LoginComponent() {
  return (
    <ViewCard>
      <CardHeader title="Login to Vault." />
      <CardContent>
        <Router />
      </CardContent>
    </ViewCard>
  );
}

export default LoginComponent;
