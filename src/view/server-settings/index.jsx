import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { getAppState } from '../../state/core/core-selectors';
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

