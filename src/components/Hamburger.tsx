import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import LogoutIcon from '@mui/icons-material/Logout';
// import { Link } from 'react-router-dom';
import Link from 'next/link'

type Anchor = 'left';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
    sx={{ width: anchor === 'left' || anchor === 'right' ? 250 : 'auto' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{color:'#eff1fe'}}>
        {[
        { text: 'Home', icon: <HomeIcon sx={{ color:'white' }} />, path: '/' }, // Define the route for Home
        { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' }, // Define the route for Profile
        { text: 'Organization', icon: <CorporateFareIcon />, path: '/organization' }, // Define the route for Organization
      ].map((item, index) => (
        <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} href={item.path}> 
              <ListItemIcon>
                {index === 0 ? <HomeIcon /> : null}
                {index === 1 ? <AccountCircleIcon /> : null}
                {index === 2 ? <CorporateFareIcon /> : null}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{color:'#eff1fe'}}>
        {[{ text: 'Logout', icon: <LogoutIcon />, path: '/logout' }].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <LogoutIcon /> : null}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Button onClick={toggleDrawer('left', true)}><MenuIcon sx={{color: '#eff1fe', ml: 0}}/></Button>
        <Drawer anchor="left" open={state['left']}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
