import * as React from 'react';
import Card from '@react-mdc/card';
import '@material/card/dist/mdc.card.css';

export default () => (
  <Card>
    <Card.Primary>
      <Card.Title large={true}>Loading...</Card.Title>
    </Card.Primary>
  </Card>
);