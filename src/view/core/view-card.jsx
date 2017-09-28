import React from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const style = theme => ({
  card: {
    margin: theme.spacing.unit,
  },
});

export function ViewCardComponent({
  children,
  classes,
  xs,
  md,
  ...childProps
}) {
  return (
    <Grid item xs={xs} md={md} className={classes.card} {...childProps}>
      <Card>
        {children}
      </Card>
    </Grid>
  );
}

ViewCardComponent.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string,
  }),
  children: PropTypes.node,
  xs: PropTypes.number,
  md: PropTypes.number,
};

ViewCardComponent.defaultProps = {
  children: null,
  classes: {},
  xs: 12,
  md: 6,
};

export default withStyles(style)(ViewCardComponent);
