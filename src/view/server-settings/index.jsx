import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { getAppState } from '../../state/core/selectors';
import LoginMethodSettings from './login-methods';
import ViewCard from '../core/view-card';

export default function Settings({
  loading,
}) {
  return (
    <ViewCard>
      <CardHeader title="Settings" />
      <CardContent>
        {
          loading
          ? <div />
          : <LoginMethodSettings />
        }
      </CardContent>
    </ViewCard>
  );
}

Settings.propTypes = ({
  loading: PropTypes.bool.isRequired,
});

const mapStateToProps = state => ({
  loading: getAppState(state),
});

