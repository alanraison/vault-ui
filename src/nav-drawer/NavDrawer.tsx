import React, { SyntheticEvent } from 'react';
import { Theme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles, useTheme } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';

import Logout from './Logout';

const useStyles = makeStyles((theme: Theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
}));

interface Props {
  open: boolean;
  classes: any;
  onOpen: (e?: SyntheticEvent) => void;
  onClose: (e?: SyntheticEvent) => void;
}

export default function NavDrawer({
  open,
  classes: parentClasses,
  onOpen,
  onClose,
}: Props) {
  const classes = useStyles({
    classes: parentClasses,
  });
  const theme = useTheme<Theme>();
  
  function handleDrawerClose() {
    onClose();
  }

  return (
    <SwipeableDrawer
      onOpen={onOpen} 
      onClose={handleDrawerClose}
      open={open}
      variant="persistent"
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <List>
        <Logout />
      </List>
    </SwipeableDrawer>
  )
}