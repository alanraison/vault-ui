import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import * as actions from '../../state/user/login/actions';

export class PoliciesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { policy: '' };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    const { onAdd } = this.props;
    const { policy } = this.state;
    if (e.keyCode === 13) {
      onAdd(policy);
    }
  }

  render() {
    const { policy } = this.state;
    const { policies, onDelete } = this.props;
    return (
      <div>
        <FormGroup row>
          <Typography type="h4">
            Policies
            <TextField
              id="policy-input"
              label="Add Policy"
              fullWidth
              onChange={e => this.setState({ policy: e.target.value })}
              onKeyUp={this.handleKeyPress}
              value={policy}
            />
          </Typography>
        </FormGroup>
        <FormGroup row>
          {
            policies.map(p => (
              <Chip
                label={p}
                key={p}
                onRequestDelete={() => onDelete(p)}
              />
            ))
          }
        </FormGroup>
      </div>
    );
  }
}

PoliciesComponent.propTypes = ({
  policies: PropTypes.arrayOf(PropTypes.string),
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
});

PoliciesComponent.defaultProps = ({
  policies: [],
  onAdd: () => null,
  onDelete: () => null,
});

const mapStateToProps = state => ({
  policies: Array.from(state.app.login.policies),
});

const mapDispatchToProps = ({
  onAdd: actions.addPolicy,
  onDelete: actions.removePolicy,
});

export default connect(mapStateToProps, mapDispatchToProps)(PoliciesComponent);
