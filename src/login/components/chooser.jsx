import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '@react-mdc/card';
import Ripple from '@react-mdc/ripple';
import '@material/card/dist/mdc.card.css';
import '@material/list/dist/mdc.list.css';
import '@material/ripple/dist/mdc.ripple.css';
import { selectLoginMethod } from '../actions';

const LoginChooserComponent = ({
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

LoginChooserComponent.propTypes = ({
  className: PropTypes.string,
  methods: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func.isRequired,
});

LoginChooserComponent.defaultProps = ({
  className: undefined,
  methods: undefined,
});

const mapStateToProps = () => ({
  methods: null,
});

const mapDispatchToProps = {
  onSelect: selectLoginMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginChooserComponent);
