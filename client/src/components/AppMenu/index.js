import React                    from 'react';
import Drawer                   from '@material-ui/core/Drawer';
import { default as MuiAppBar } from '@material-ui/core/AppBar';
import MenuItem                 from '@material-ui/core/MenuItem';

export default class AppMenu extends React.Component {
  render () {
    let { open, title, onLeftIconButtonTouchTap } = this.props;

    return (
      <Drawer open={open} docked={false}>
        <MuiAppBar
          title={title}
          onLeftIconButtonTouchTap={onLeftIconButtonTouchTap}
        />
        <MenuItem>{'Menu Item 1'}</MenuItem>
        <MenuItem>{'Menu Item 2'}</MenuItem>
      </Drawer>
    );
  }
}
