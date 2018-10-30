// @flow
import * as React from 'react';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import ViewCard from '../core/view-card';

export function WorkspaceComponent() {
  return [
    <Hidden smDown>
      <ViewCard md={3}>
        <CardContent>
          Recent Paths
        </CardContent>
      </ViewCard>
    </Hidden>,
    <ViewCard xs={12} md={8}>
      <CardContent>
        <TextField
          id="path"
          label="Path"
          fullWidth
        />
      </CardContent>
    </ViewCard>,
  ];
}

export default WorkspaceComponent;
