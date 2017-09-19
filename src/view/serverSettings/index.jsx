import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';
import Switch from 'material-ui/Switch';
import PermIdentity from 'material-ui-icons/PermIdentity';

export default function Settings() {
  return (
    <Card>
      <CardHeader title="Settings" />
      <CardContent>
        <List subheader={<ListSubheader>Login Methods</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <PermIdentity />
            </ListItemIcon>
            <ListItemText primary="UserPass" />
            <ListItemSecondaryAction>
              <Switch />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

Settings.propTypes = ({

});
