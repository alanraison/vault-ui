// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import RootRef from '@material-ui/core/RootRef';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import type { Action } from '../../state/actions';
import * as loginActions from '../../state/login/actions';
import { getVault } from '../../state/core/core-selectors';
import type { State } from '../../state/reducers';
import Vault from '../../vault-api';

type PropsFromState = {
  loggedIn: boolean,
  name: string,
}

type DispatchProps = {
  onLogout: () => Action,
}

type ComponentState = {
  profileOpen: boolean,
}

class ProfileMenuComponent extends React.Component<
  PropsFromState & DispatchProps,
  ComponentState
> {
  state = {
    profileOpen: false,
  }

  menuRef = React.createRef();

  handleProfileMenu = () => {
    this.setState(prev => ({
      profileOpen: !prev.profileOpen,
    }));
  }

  render() {
    const {
      loggedIn,
      name,
      onLogout,
    } = this.props;
    const { profileOpen } = this.state;
    return (
      loggedIn ? (
        <div>
          <RootRef rootRef={this.menuRef}>
            <IconButton
              aria-owns={profileOpen ? 'profile-app-bar' : null}
              aria-haspopup="true"
              onClick={this.handleProfileMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </RootRef>
          <Menu
            id="profile-app-bar"
            anchorEl={this.menuRef.current}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizonal: 'right',
            }}
            open={profileOpen}
            onClose={this.handleProfileMenu}
          >
            <MenuItem onClick={() => { onLogout(); this.handleProfileMenu(); }}>{`Logout ${name}`}</MenuItem>
          </Menu>
        </div>
      ) : null
    );
  }
}

const mapStateToProps = (state: State): PropsFromState => ({
  loggedIn: Boolean(getVault(state).token),
  name: '',
});

const mapDispatchToProps: DispatchProps = {
  onLogout: loginActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenuComponent);
