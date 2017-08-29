import React from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import { CircularProgress } from 'material-ui/Progress';

export default function LoadingComponent() {
  return (
    <Card>
      <CardHeader title="Loading..." />
      <CardContent>
        <CircularProgress />
      </CardContent>
    </Card>
  );
}
