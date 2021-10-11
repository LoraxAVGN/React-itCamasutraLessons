import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const BarLink = (props) =>{
    return(
        <div className={s.item}>
            <NavLink to={`/${props.name}`} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <BarLink name='Profile'/>
            <BarLink name='Dialog'/>
            <BarLink name='Users'/>
            <BarLink name='News'/>
            <BarLink name='Music'/>
            <BarLink name='Settings'/>
        </nav>
    )
}

export default NavBar;