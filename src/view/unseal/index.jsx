import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import UnsealCount from './count';
import * as actions from '../../actions/sealStatus';

export class UnsealComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { unseal: '' };
  }

  render() {
    return (
      <Card>
        <CardHeader title="Vault is sealed." subheader={<UnsealCount />} />
        <CardContent>
          <TextField
            id="unseal-key-input"
            fullWidth
            onChange={e => this.setState({ unseal: e.target.value }) }
            value={this.state.unseal}
            label="Unseal Key"
          />
        </CardContent>
        <CardActions>
          <Button onClick={() => this.props.onSubmit(this.state.unseal)}>Unseal</Button>
        </CardActions>
      </Card>
    );
  }
}

UnsealComponent.propTypes = ({
  onSubmit: PropTypes.func.isRequired,
});

const mapDispatchToProps = {
  onSubmit: actions.unsealRequest,
};

export default connect(null, mapDispatchToProps)(UnsealComponent);
