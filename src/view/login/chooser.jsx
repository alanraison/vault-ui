import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { selectLoginMethod } from '../../actions/login';
import methods from './methods';

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
  onClick: PropTypes.func.isRequired,
};

LoginChoiceItem.defaultProps = {
  method: '',
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
  onSelect: PropTypes.func.isRequired,
});

LoginChooserComponent.defaultProps = ({
  methodList: [],
});

const mapStateToProps = () => ({
  methodList: Object.keys(methods),
});

const mapDispatchToProps = {
  onSelect: selectLoginMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginChooserComponent);
