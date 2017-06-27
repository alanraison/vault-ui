import React from 'react';
import UnsealCount from './unseal-count';
import UnsealInput from './unseal-input';
import UnsealButton from './unseal-button';
import Card from '@react-mdc/card';
import '@material/card/dist/mdc.card.css';

export default () => (
  <Card>
    <Card.Primary>
      <Card.Title large>Vault is sealed.</Card.Title>
      <Card.Subtitle>
        <UnsealCount/>
      </Card.Subtitle>
    </Card.Primary>
    <Card.SupportingText>
      <UnsealInput/>
    </Card.SupportingText>
    <Card.Actions>
      <UnsealButton/>
    </Card.Actions>
  </Card>
);