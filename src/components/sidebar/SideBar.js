import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ShoppingBag } from '@mui/icons-material';
import logo from "../../assets/Group.png"
import "./sidebar.css"
import { PhoneAndroid } from '@mui/icons-material';

export default function SideBar({ state, setState, toggleDrawer }) {
  const anchor = 'left';

  if (!state) {
    return null;
  }

  const list = (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <img src={logo} style={{marginLeft:"83px"}}/>
      </List>
      <Divider/>
      <List>
        {[  'Add to Cart', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ?  <ShoppingBag />: <PhoneAndroid/>  }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      {state.hasOwnProperty(anchor) && (
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list}
        </Drawer>
      )}
    </Box>
  );
}
