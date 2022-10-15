import React from 'react'
import {useState} from 'react'
import { Navigate } from 'react-router-dom';
import css from './LoginPage.module.css'
import Title from '../../components/title/Title'

function LoginPage() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submit = (e) => {
        e.preventDefault();
        alert(login + password);
        if(login === "admin" && password === "admin"){
                Navigate('./dashBoard')
        }
        else{
            
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

export default LoginPage