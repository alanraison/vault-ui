import React from 'react';
import { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import ViewCard from './view-card';

const NotFound = () => (
  <ViewCard>
    <CardHeader title="Error" />
    <CardContent>
      <Typography>
      Path not found.
      </Typography>
    </CardContent>
  </ViewCard>
);

export default NotFound;
