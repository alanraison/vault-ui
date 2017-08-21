import React from 'react';
import { connect } from 'react-redux';
import Card from '@react-mdc/card';
import Ripple from '@react-mdc/ripple';
import '@material/card/dist/mdc.card.css';
import '@material/list/dist/mdc.list.css';
import '@material/ripple/dist/mdc.ripple.css';
import { selectLoginMethod } from '../actions';

const LoginChooser = ({
  className,
  methods,
  onSelect,
}) => (
  <Card className={className}>
    <Card.Primary>
      <Card.Title large>Login to Vault.</Card.Title>
    </Card.Primary>
    <Card.SupportingText>
      <ul className="mdc-list">
        <Ripple onClick={() => onSelect('token')}>
          <li className="mdc-list-item">
            Token
          </li>
        </Ripple>
      </ul>
    </Card.SupportingText>
  </Card>
);

const mapStateToProps = () => ({
  methods: null,
});

const mapDispatchToProps = {
  onSelect: selectLoginMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginChooser);
