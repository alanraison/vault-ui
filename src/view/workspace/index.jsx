// @flow
import * as React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import ViewCard from '../core/view-card';

export function WorkspaceComponent() {
  return [
    <ViewCard xs={12}>
      <CardContent>
        <Grid container>
          <Hidden smDown>
            <Grid item md={3}>
              <Card>
                <CardContent>
                  Hello
                </CardContent>
              </Card>
            </Grid>
          </Hidden>
          <Grid item xs={9}>
            <TextField
              id="path"
              label="Path"
              fullWidth
            />
          </Grid>
        </Grid>
      </CardContent>
    </ViewCard>,
  ];
}

export default WorkspaceComponent;
