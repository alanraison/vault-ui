import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import Header from './header';
import Router from './router';

const style = theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    margin: theme.spacing.unit,
  },
});

export function PageComponent({
  classes,
}) {
  return (
    <div>
      <Header />
      <Grid container className={classes.root} justify="center">
        <Grid item xs={12} md={6} className={classes.content}>
          <Router />
        </Grid>
      </Grid>
    </div>
  );
}

PageComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(PageComponent);
