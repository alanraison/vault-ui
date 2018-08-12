// @flow
import * as React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
  card: {
    overflow: 'hidden',
    margin: theme.spacing.unit,
  },
});

type Props = {
  children: React.Node,
  classes?: {
    card: string,
  },
  xs?: number,
  md?: number,
  childProps: mixed,
};

export function ViewCardComponent({
  children,
  classes,
  xs,
  md,
  ...childProps
}: Props) {
  return (
    <Grid item xs={xs} md={md} className={classes.card} {...childProps}>
      <Card>
        {children}
      </Card>
    </Grid>
  );
}

ViewCardComponent.defaultProps = {
  classes: {},
  xs: 12,
  md: 6,
};

export default withStyles(style)(ViewCardComponent);
