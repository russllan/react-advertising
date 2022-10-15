import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css'

const Header = () =>{
    return( 
    <header className={css.wrapper}>
        <Link to="/" className={css.logo}>LOGO</Link>
        <div className={css.line}>
            <Link to="/aboutMe" className={css.about}>О нас</Link>
            <Link to="/contacts" className={css.contacts}>Контакты</Link>
            <Link to="/login" className={css.login}>Войти</Link>
        </div>
    </header>
    )
}


export default Header;