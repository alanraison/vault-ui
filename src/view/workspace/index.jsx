// @flow
import * as React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ViewCard from '../core/view-card';

export function WorkspaceComponent() {
  return (
    <ViewCard xs={12} md={9}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="path"
              label="Path"
              fullWidth
            />
          </Grid>
        </Grid>
      </CardContent>
    </ViewCard>
  );
}

export default WorkspaceComponent;
