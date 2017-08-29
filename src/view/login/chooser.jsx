import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '@react-mdc/card';
import Ripple from '@react-mdc/ripple';
import '@material/card/dist/mdc.card.css';
import '@material/list/dist/mdc.list.css';
import '@material/ripple/dist/mdc.ripple.css';

import { selectLoginMethod } from '../../actions/login';
import methods from './methods';

function LoginChoiceItem({
  method,
  onClick,
}) {
  return (
    <Ripple onClick={onClick}>
      <li className="mdc-list-item">
        {method}
      </li>
    </Ripple>
  );
}

LoginChoiceItem.propTypes = ({
  method: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
});

function LoginChooserComponent({
  className,
  methodList,
  onSelect,
}) {
  return (
    <Card className={className}>
      <Card.Primary>
        <Card.Title large>Login to Vault.</Card.Title>
      </Card.Primary>
      <Card.SupportingText>
        <ul className="mdc-list">
          {
            methodList.map(method => (
              <LoginChoiceItem
                key={method}
                method={method}
                onClick={() => onSelect(method)}
              />))
          }
        </ul>
      </Card.SupportingText>
    </Card>
  );
}

LoginChooserComponent.propTypes = ({
  className: PropTypes.string,
  methodList: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func.isRequired,
});

LoginChooserComponent.defaultProps = ({
  className: undefined,
  methodList: [],
});

const mapStateToProps = () => ({
  methodList: methods,
});

const mapDispatchToProps = {
  onSelect: selectLoginMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginChooserComponent);
