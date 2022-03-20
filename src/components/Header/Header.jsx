import React  from 'react';
import s from './Header.module.css';
import logoPhoto from '../../assets/images/logo1.png';

const Header = () =>{
    return(
    <header className={s.header}>
        <div className={s.headerBlock}>
            <a href="#"><img src={logoPhoto} className={s.logo} /></a>
            <div className={s.buttons}>
                <div className={s.inputBut}>
                    Войти
                </div>
                <div className={s.registrBut}>
                    Регистрация
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;