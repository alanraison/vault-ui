import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';
import methods from './methods';
import actions from '../../actions';

export function LoginChoiceItem({
  method,
  onClick,
}) {
  return (
    <ListItem button onClick={onClick}>
      <ListItemText primary={method} />
    </ListItem>
  );
}

LoginChoiceItem.propTypes = {
  method: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export function LoginChooserComponent({
  methodList,
  onSelect,
}) {
  return (
    <List>
      {
        methodList.map(method => (
          <LoginChoiceItem
            key={method}
            method={method}
            onClick={() => onSelect(method)}
          />))
      }
    </List>
  );
}

LoginChooserComponent.propTypes = ({
  methodList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
});

const mapStateToProps = () => ({
  methodList: Object.keys(methods),
});

const mapDispatchToProps = {
  onSelect: actions.login.selectLoginMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginChooserComponent);
