import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { authSliceAction } from '../../redux/authSlice';


const Header = () =>{
    const data = useSelector((state) => state.auth.isAuth)
    console.log("HEADER COMPONENT: ", data);
    
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authSliceAction.logout())
    }

    return( 
    <header className={css.wrapper}>
        <Link to="/" className={css.logo}>LOGO</Link>
        <div className={css.line}>
            <Link to="/aboutMe" className={css.about}>О нас</Link>
            <Link to="/contacts" className={css.contacts}>Контакты</Link>
            {
                data ? <>
                <Link to="/DashboardPage" className={css.login}>Кабинет</Link>
                <span onClick={handleLogout}>Выйти</span>
                </>
                :
                (<Link to="/login" className={css.login}>Войти</Link>)
            }
        </div>
    </header>
    )
}


export default Header;