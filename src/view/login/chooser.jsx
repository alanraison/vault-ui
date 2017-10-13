import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import ChevronRight from 'material-ui-icons/ChevronRight';
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
  method: PropTypes.string,
  onClick: PropTypes.func,
};

LoginChoiceItem.defaultProps = {
  method: '',
  onClick: () => null,
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
  methodList: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
});

LoginChooserComponent.defaultProps = ({
  methodList: [],
  onSelect: () => null,
});

const mapStateToProps = () => ({
  methodList: Object.keys(methods),
});

const mapDispatchToProps = {
  onSelect: actions.login.selectLoginMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginChooserComponent);
