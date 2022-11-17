import React, { ChangeEvent, useCallback, useContext, useState } from "react";
import SalesCard from "../SalesCard";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import {User} from "../../models/user";
import './styles.css';
import {useForm } from 'react-hook-form'
import Insert from "../Insert";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navegate = useNavigate();
    const auth = useContext(AuthContext);    
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
   }

   const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
   }
    
    const handleSubmit = async () => {
        if(email && password) { 
            const isLogged = await auth.signin(email, password);
            if(isLogged){
                navegate('/')
            }
            else {
                window.alert("Usuário inválido")
            }
        }
    }
        

    

    return (
    <main>    
        <div className="card-post">
            <h1 className="fields">Entrar</h1>
            <form  onSubmit={ handleSubmit}>
                <div className="filds">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="htmlForm-control"
                        id="email" 
                        name="email"
                        required autoFocus placeholder="Email"
                        onChange={handleEmailInput}
                        
                        
                    />
                    <div id="emailHelp" className="htmlForm-text">Nunca compartilharemos seu e-mail com ninguém.</div>
                </div>
                <div className="fields">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Senha:</label>
                    <input 
                    type="password" 
                    className="htmlForm-control" 
                    id="password" 
                    name="password" 
                    required placeholder="Senha" min={6}
                        onChange={handlePasswordInput}
                    />
                </div>
                
                <div className="btn-post">
                    <button onClick={handleSubmit} >Logar</button>
                </div>

            </form>
        </div>
    </main>    
    )
}

export default Login;