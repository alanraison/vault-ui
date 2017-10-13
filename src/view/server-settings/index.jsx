import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import LoginMethodSettings from './login-methods';
import ViewCard from '../core/view-card';

export default function Settings() {
  return (
    <ViewCard>
      <CardHeader title="Settings" />
      <CardContent>
        <LoginMethodSettings />
      </CardContent>
    </ViewCard>
  );
}

Settings.propTypes = ({

});
