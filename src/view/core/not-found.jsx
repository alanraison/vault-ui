import React from 'react';
import { CardHeader, CardContent } from 'material-ui/Card';
import ViewCard from './view-card';

const NotFound = () => (
  <ViewCard>
    <CardHeader title="Error" />
    <CardContent>
      Path not found.
    </CardContent>
  </ViewCard>
);

export default NotFound;
