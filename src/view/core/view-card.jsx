// @flow
import * as React from 'react';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

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

// ViewCardComponent.propTypes = {
//   classes: PropTypes.shape({
//     card: PropTypes.string,
//   }),
//   children: PropTypes.node,
//   xs: PropTypes.number,
//   md: PropTypes.number,
// };

ViewCardComponent.defaultProps = {
  classes: {},
  xs: 12,
  md: 6,
};

export default withStyles(style)(ViewCardComponent);
