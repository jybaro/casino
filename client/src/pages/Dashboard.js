import React from 'react'
import { Spinner } from '../components/Spinner';
import { Status } from '../components/Status';
import { Header } from '../components/Header';
import {config} from '../config'

export const Dashboard = ({machine, setStart, setMachine }) => {
    const handleStartSession = (e) => {
        start();
    };

    const start = async () => {
        const response = await fetch(config.apiURL + '/start/' + machine._id);
        const data = await response.json();
        setMachine(data);
        setStart(true);
    }
    return (
        <div>
            <Header title="Bienvenido"  machine={machine} setStart={setStart}  setMachine={setMachine} />
            <div className="bg-indigo-900 text-center py-4 lg:px-4">
            <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">HOLA</span>
                <span className="font-semibold mr-2 text-left flex-auto">¿Listo para probar de nuevo tu suerte?</span>
                <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </div>
            
            <button onClick={handleStartSession} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Iniciar partida</button>
            </div>
            <Spinner />            
        </div>
    )
}
