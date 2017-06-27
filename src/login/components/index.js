import React from 'react';
import Card from '@react-mdc/card';
import Button from '@react-mdc/button';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';

export default () => (
  <Card>
    <Card.Primary>
      <Card.Title><strong>Login to Vault.</strong></Card.Title>
    </Card.Primary>
    <Card.SupportingText>
      LoginChooser
    </Card.SupportingText>
    <Card.Actions>
      <Button>Login</Button>
    </Card.Actions>
  </Card>
)