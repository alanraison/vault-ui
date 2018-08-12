import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
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
