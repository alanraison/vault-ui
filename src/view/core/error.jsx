import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import ViewCard from './view-card';
import { clearError } from '../../state/core/core-actions';

export function ErrorComponent({
  error,
  source,
  onDismiss,
}) {
  return (
    <ViewCard>
      <CardHeader title="Error" />
      <CardContent>
        <Typography>
          {`Error ${source}: ${error.toString()}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="dismiss" onClick={onDismiss}>Dismiss</Button>
      </CardActions>
    </ViewCard>
  );
}

ErrorComponent.propTypes = ({
  error: PropTypes.instanceOf(Error).isRequired,
  source: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
});

const mapStateToProps = state => ({
  error: state.app.error.err,
  source: state.app.error.source,
});

const mapDispatchToProps = ({
  onDismiss: clearError,
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComponent);
