import React from 'react'
import {useState} from 'react'
import { Navigate } from 'react-router-dom';
import css from './LoginPage.module.css'
import Title from '../../components/title/Title'
import { useDispatch } from 'react-redux';
import { authSliceAction } from '../../redux/authSlice';

function LoginPage() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        alert(login + password);
        if(login === "admin" && password === "admin"){
            dispatch(authSliceAction.setAuth(true));
        }
        else{
            setError("Login or Password is incorect. Please try again!")
        }
    }

    const handleLoginChange = (e) =>{
        setLogin(e.target.value)
        setError("")
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
        setError("")
    } 

  return (
    <div className='page'>
        <Title position="center">Войти</Title>
        <form className={css.form} onSubmit={submit}>
            <input value={login} onChange={handleLoginChange} className={css.login} />
            <input value={password} onChange={handlePasswordChange} className=''/>
            <button className={css.button}>Войти</button>
            <div className='error-message'>{error}</div>
        </form>
    </div>
  )
}

export default LoginPage;