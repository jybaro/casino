import React, {useState} from 'react'
import { Spinner } from '../components/Spinner';
import { Header } from '../components/Header';
import {config} from '../config'

export const Login = ({setMachine}) => {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    
    const handleUsernameChange= (e) => {
        setUsernameValue(e.target.value);
    }
    const handlePasswordChange= (e) => {
        setPasswordValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        login();
    }

    const login = async () => {
        const response = await fetch(config.apiURL + '/login/', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: usernameValue, 
                password: passwordValue
            }),
        });
        const data = await response.json();
        setMachine(data);
    }

    return (
        <>
            <Header title='Ingreso' />

            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
               
            >
                <div className="p-4">
                    <input 
                        id="username" 
                        placeholder="Nombre de usuario" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={usernameValue} 
                        onChange= {handleUsernameChange}
                    />
                </div>
                
                <div className="p-4">
                    <input 
                        type="password" 
                        id="password" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Contrase&ntilde;a"  
                        
                        value={passwordValue} 
                        onChange= {handlePasswordChange}
                    />
                </div>
                <div className="p-4">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSubmit}
                    >Ingresar / Crear usuario</button>
                </div>
            </form>
            <Spinner />
        </>
    )
}
