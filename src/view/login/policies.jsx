import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';

import * as actions from '../../actions/login';

export class PoliciesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { policy: '' };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(e) {
    if (e.keyCode === 13) {
      this.props.onAdd(this.state.policy);
    }
  }
  render() {
    return (
      <div>
        <FormGroup row>
          <TextField
            id="policy-input"
            label="Add Policy"
            fullWidth
            onChange={e => this.setState({ policy: e.target.value })}
            onKeyUp={this.handleKeyPress}
            value={this.state.policy}
          />
        </FormGroup>
        <FormGroup row>
          {
            this.props.policies.map(p => (
              <Chip
                label={p}
                key={p}
                onRequestDelete={() => this.props.onDelete(p)}
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
