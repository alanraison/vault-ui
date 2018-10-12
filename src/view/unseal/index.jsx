import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import UnsealCount from './count';
import ViewCard from '../core/view-card';
import * as actions from '../../state/seal-status/actions';

type Props = {
  onSubmit: () => any,
}

type ComponentState = {
  key: string,
}

export class UnsealComponent extends React.Component<Props, ComponentState> {
  state = {
    key: '',
  }

  handleEdit = (e: Event) => {
    this.setState({
      key: e.target.value,
    });
  }

  render() {
    const { onSubmit } = this.props;
    const { key } = this.state;
    return (
      <ViewCard>
        <CardHeader title="Vault is sealed." subheader={<UnsealCount />} />
        <CardContent>
          <TextField
            id="unseal-key-input"
            fullWidth
            onChange={this.handleEdit}
            value={key}
            label="Unseal Key"
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSubmit(key)}
          >
          Unseal
          </Button>
        </CardActions>
      </ViewCard>
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
