import * as React from 'react';
import { useEffect } from 'react';
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
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Link from 'next/link';

type Anchor = 'left';

const session = localStorage.getItem('session');

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
      <List sx={{ color: '#eff1fe' }}>
        {[
          { text: 'Home', icon: <HomeIcon sx={{ color: 'white' }} />, path: '/' }, 
          session && { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' }, 
          { text: 'Organization', icon: <CorporateFareIcon />, path: '/organization' }, 
          { text: 'Questions', icon: <CorporateFareIcon />, path: '/questions' },
          { text: 'Ask', icon: <CorporateFareIcon />, path: '/ask' },
        ].map((item, index) => (
          item && (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} href={item.path}>
                <ListItemIcon>
                  {index === 0 ? <HomeIcon /> : null}
                  {index === 1 ? <AccountCircleIcon /> : null}
                  {index === 2 ? <CorporateFareIcon /> : null}
                  {index === 3 ? <ListAltIcon /> : null}
                  {index === 4 ? <QuestionAnswerIcon /> : null}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          )
        ))}
      </List>
      <Divider />
      <List sx={{ color: '#eff1fe' }}>
        {session && [{ text: 'Logout', icon: <LogoutIcon />, path: '/logout' }].map((item, index) => (
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
        <Button onClick={toggleDrawer('left', true)}><MenuIcon sx={{ color: '#eff1fe', ml: 0 }}/></Button>
        <Drawer anchor="left" open={state['left']}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
