// @flow
import * as React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core';
import type { GridSizes } from '@material-ui/core/Grid/Grid';

const style = (theme: Theme) => ({
  card: {
    overflow: 'hidden',
    margin: theme.spacing.unit,
  },
});

type Props = {
  children: React.Node,
  classes?: {
    card?: string,
  },
  xs?: GridSizes,
  md?: GridSizes,
  other?: mixed,
};

export function ViewCardComponent({
  children,
  classes = {},
  xs,
  md,
  ...other
}: Props) {
  return (
    <Grid item xs={xs} md={md} className={classes.card} {...other}>
      <Card>
        {children}
      </Card>
    </Grid>
  );
}

ViewCardComponent.defaultProps = {
  xs: false,
  md: false,
  classes: {
    card: '',
  },
  other: {},
};

export default withStyles(style)(ViewCardComponent);
