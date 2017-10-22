import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PermIdentity from 'material-ui-icons/PermIdentity';
import ToggleableSettings from './toggleable-settings';
import * as adminActions from '../../actions/admin';

export function UserPassSettingsComponent({
  enabled,
  onEnable,
  onDisable,
}) {
  return (
    <ToggleableSettings
      iconComponent={<PermIdentity />}
      title="UserPass"
      enabled={enabled}
      onEnable={onEnable}
      onDisable={onDisable}
    >
      <div>Stuff</div>
    </ToggleableSettings>
  );
}

UserPassSettingsComponent.propTypes = {
  enabled: PropTypes.bool,
  onEnable: PropTypes.func.isRequired,
  onDisable: PropTypes.func.isRequired,
};

UserPassSettingsComponent.defaultProps = {
  enabled: false,
};

const mapStateToProps = state => ({
  enabled: false,
});

const mapDispatchToProps = {
  onEnable: adminActions.enableLoginMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPassSettingsComponent);
