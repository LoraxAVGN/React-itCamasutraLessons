import React from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import s from './Header.module.css';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


const Header = () => {

    const { profile } = useSelector(state => state.profilePage);

    return (
        <header className={s.header}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className={s.toolbar}>
                        <Typography className={s.typography} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink to="/Profile">
                                MySoc
                            </NavLink>
                        </Typography>
                        <NavLink className={s.link} activeClassName={s.active} to="/Dialog">
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                        </NavLink>
                        <NavLink to="/Profile">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={profile?.photos?.small || 'https://mui.com/static/images/avatar/2.jpg'} />
                            </IconButton>
                        </NavLink>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}

export default Header;