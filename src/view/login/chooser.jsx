import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import List, { ListItem, ListItemText } from 'material-ui/List';

import { selectLoginMethod } from '../../actions/login';
import methods from './methods';

function LoginChoiceItem({
  method,
  onClick,
}) {
  return (
    <ListItem button onClick={onClick}>
      <ListItemText primary={method} />
    </ListItem>
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
      <CardHeader title="Login to Vault." />
      <CardContent>
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
      </CardContent>
    </Card>
  );
}

LoginChooserComponent.propTypes = ({
  className: PropTypes.string,
  methodList: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func.isRequired,
});

LoginChooserComponent.defaultProps = ({
  className: '',
  methodList: [],
});

const mapStateToProps = () => ({
  methodList: Object.keys(methods),
});

const mapDispatchToProps = {
  onSelect: selectLoginMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginChooserComponent);