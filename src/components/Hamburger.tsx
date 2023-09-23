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
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ListAltIcon from '@mui/icons-material/ListAlt';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Link from 'next/link';
import { useAuth } from '@/context/session';
import { useRouter } from 'next/navigation';
type Anchor = 'left';

export default function TemporaryDrawer() {
    const { session, logout } = useAuth();
    const router = useRouter();
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

    const handleBackdropClick = (event: React.MouseEvent) => {
        // Prevent click event propagation to the Drawer component
        event.stopPropagation();
        setState({ ...state, left: false });
    };

    const list = (anchor: Anchor) => (
        <div onClick={handleBackdropClick}>
        <Box
            sx={{ width: anchor === 'left' || anchor === 'right' ? 250 : 'auto' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{ color: '#eff1fe' }}>
                {[
                    { text: 'Home', icon: <HomeIcon sx={{ color: 'white' }} />, path: '/' },
                    session.token && { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
                    session.token && { text: 'Organization', icon: <CorporateFareIcon />, path: '/organization' },
                    !session.token && { text: 'Login', icon: <LoginIcon />, path: '/login' },
                    !session.token && { text: 'Register', icon: <HowToRegIcon />, path: '/register' },
                    { text: 'Questions', icon: <CorporateFareIcon />, path: '/questions' },
                    { text: 'Users', icon: <CorporateFareIcon />, path: '/users' },
                    session.token && { text: 'Ask', icon: <CorporateFareIcon />, path: '/ask' },
                ].map((item, index) => (
                    item && (
                        <ListItem key={item.text}>
                            <ListItemButton component={Link} href={item.path}>
                                <ListItemIcon>
                                    {index === 0 ? <HomeIcon sx={{color: 'white'}} /> : null}
                                    {index === 1 ? <AccountCircleIcon sx={{color: 'white'}} /> : null}
                                    {index === 2 ? <CorporateFareIcon sx={{color: 'white'}} /> : null}
                                    {index === 3 ? <LoginIcon sx={{color: 'white'}} /> : null}
                                    {index === 4 ? <HowToRegIcon sx={{color: 'white'}} /> : null}
                                    {index === 5 ? <ListAltIcon sx={{color: 'white'}} /> : null}
                                    {index === 6 ? <PeopleAltIcon sx={{color: 'white'}} /> : null}
                                    {index === 7 ? <QuestionAnswerIcon sx={{color: 'white'}} /> : null}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    )
                ))}
            </List>
            <Divider />
            <List sx={{ color: '#eff1fe' }}>
                {session.token && [{ text: 'Logout', icon: <LogoutIcon /> }].map((item, index) => (
                    <ListItem key={item.text}>
                        <ListItemButton onClick={() => {
                            logout().then(() => {
                                router.push('/');
                            })
                        }}>
                            <ListItemIcon>
                                {index === 0 ? <LogoutIcon sx={{color: 'white'}} /> : null}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box >
        </div>
    );

    return (
        <div>
            <React.Fragment key="left">
                <Button onClick={toggleDrawer('left', true)}><MenuIcon sx={{ color: '#eff1fe', ml: 0 }} /></Button>
                <Drawer anchor="left" open={state['left']} onBackdropClick={handleBackdropClick}>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
