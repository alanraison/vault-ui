import React from 'react';
import { CardHeader, CardContent } from 'material-ui/Card';
import { CircularProgress } from 'material-ui/Progress';
import ViewCard from './view-card';

export default function LoadingComponent() {
  return (
    <ViewCard>
      <CardHeader title="Loading..." />
      <CardContent>
        <CircularProgress />
      </CardContent>
    </ViewCard>
  );
}
