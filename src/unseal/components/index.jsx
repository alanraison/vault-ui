import React from 'react';
import Card from '@react-mdc/card';
import '@material/card/dist/mdc.card.css';

import UnsealCount from './unseal-count';
import UnsealInput from './unseal-input';
import UnsealButton from './unseal-button';

export default () => (
  <Card>
    <Card.Primary>
      <Card.Title large>Vault is sealed.</Card.Title>
      <Card.Subtitle>
        <UnsealCount />
      </Card.Subtitle>
    </Card.Primary>
    <Card.SupportingText>
      <UnsealInput />
    </Card.SupportingText>
    <Card.Actions>
      <UnsealButton />
    </Card.Actions>
  </Card>
);
