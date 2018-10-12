import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ViewCard from './view-card';

const NotFound = () => (
  <ViewCard xs={12} md={6}>
    <CardHeader title="Error" />
    <CardContent>
      <Typography>
      Path not found.
      </Typography>
    </CardContent>
  </ViewCard>
);

export default NotFound;
