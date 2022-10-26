import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css'
import { useSelector } from 'react-redux';

const Header = () =>{
    const data = useSelector((state) => state.isAuth)
    console.log("HEADER COMPONENT: ", isAuth);
    return( 
    <header className={css.wrapper}>
        <Link to="/" className={css.logo}>LOGO</Link>
        <div className={css.line}>
            <Link to="/aboutMe" className={css.about}>О нас</Link>
            <Link to="/contacts" className={css.contacts}>Контакты</Link>
            {
                isAuth ? (<Link to="/login" className={css.login}>Войти</Link>):
                (<Link to="/login" className={css.login}>Кабинет</Link>)
            }
        </div>
    </header>
    )
}


export default Header;