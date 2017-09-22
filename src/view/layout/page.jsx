import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import Header from './header';
import Router from '../core/router';


export function PageComponent({
}) {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

PageComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // classes: PropTypes.object.isRequired,
};

export default PageComponent;
