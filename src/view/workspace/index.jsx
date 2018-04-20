// @flow
import * as React from 'react';
import { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import ViewCard from '../core/view-card';

export function WorkspaceComponent() {
  return (
    <ViewCard md={12}>
      <CardContent>
        <Grid container={true}>
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
