import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import StoreState from '../../types';
import { selectLoginMethod } from '../actions';
import Card from '@react-mdc/card';
import Ripple from '@react-mdc/ripple';
import '@material/card/dist/mdc.card.css';
import '@material/list/dist/mdc.list.css';
import '@material/ripple/dist/mdc.ripple.css';

export type Props = {
  className: string,
  methods: Array<string>,
  onSelect: (s: string) => Action,
};

const LoginChooser: React.SFC<Props> = ({
  className,
  methods,
  onSelect,
}) => {
  return (
    <Card className={className}>
      <Card.Primary>
        <Card.Title large={true}>Login to Vault.</Card.Title>
      </Card.Primary>
      <Card.SupportingText>
        <ul className="mdc-list">
          <Ripple onClick={ () => onSelect('token') }>
            <li className="mdc-list-item">
              Token
            </li>
          </Ripple>
        </ul>
      </Card.SupportingText>
    </Card>
  );
};

const mapStateToProps = (state: StoreState) => ({
  methods: null,
});

const mapDispatchToProps = {
  onSelect: selectLoginMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginChooser);