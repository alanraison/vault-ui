import React from 'react';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import UnsealCount from './count';
import UnsealInput from './input';
import UnsealButton from './button';

export default function UnsealComponent() {
  return (
    <Card>
      <CardHeader title="Vault is sealed." subheader={<UnsealCount />} />
      <CardContent>
        <UnsealInput />
      </CardContent>
      <CardActions>
        <UnsealButton />
      </CardActions>
    </Card>
  );
}
