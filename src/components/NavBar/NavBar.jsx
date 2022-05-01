import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const BarLink = (props) =>{
    return(
        <div className={s.item}>
            <NavLink to={`/${props.name}`} activeClassName={s.activeLink}>{props.className}</NavLink>
        </div>
    )
}

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <BarLink name='Profile' className="Профиль" />
            <BarLink name='Dialog' className="Сообщения" />
            <BarLink name='Users' className="Поиск" />
            <BarLink name='News' className="Новости" />
            <BarLink name='Settings' className="Настройки" />
        </nav>
    )
}

export default NavBar;