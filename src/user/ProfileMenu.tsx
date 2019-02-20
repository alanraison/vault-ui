import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ArrowDropDown } from '@material-ui/icons';

export default function ProfileMenu() {
  return <Typography
    variant="button"
    color="inherit"
    aria-label="Profile"
  >
    Profile <ArrowDropDown />
  </Typography>
}