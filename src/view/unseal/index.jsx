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
import { getUnsealKey } from '../../state/seal-status/selectors';

export function UnsealComponent({
  unsealKey,
  onChangeKey,
  onSubmit,
}) {
  return (
    <ViewCard>
      <CardHeader title="Vault is sealed." subheader={<UnsealCount />} />
      <CardContent>
        <TextField
          id="unseal-key-input"
          fullWidth
          onChange={e => onChangeKey(e.target.value)}
          value={unsealKey}
          label="Unseal Key"
        />
      </CardContent>
      <CardActions>
        <Button
          variant="raised"
          color="primary"
          onClick={() => onSubmit(unsealKey)}
        >
        Unseal
        </Button>
      </CardActions>
    </ViewCard>
  );
}

UnsealComponent.propTypes = ({
  unsealKey: PropTypes.string.isRequired,
  onChangeKey: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
});

const mapStateToProps = state => ({
  unsealKey: getUnsealKey(state),
});

const mapDispatchToProps = {
  onChangeKey: actions.editUnsealKey,
  onSubmit: actions.unsealRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UnsealComponent);
