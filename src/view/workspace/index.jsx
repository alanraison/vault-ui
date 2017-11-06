// @flow
import React from 'react';
import { CardContent } from 'material-ui/Card';
import ViewCard from '../core/view-card';

export function WorkspaceComponent() {
  return (
    <ViewCard md={12}>
      <CardContent>
        Workspace
      </CardContent>
    </ViewCard>
  );
}

export default WorkspaceComponent;
