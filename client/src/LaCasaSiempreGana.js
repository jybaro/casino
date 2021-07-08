import React, {useState} from 'react';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Casino } from './pages/Casino';

export const LaCasaSiempreGana = () => {
    const [machine, setMachine] = useState({});
    const [start, setStart] = useState(false);

    return (
        <div>
            { !machine._id && <Login setMachine={setMachine} /> }
            { machine._id && !start && <Dashboard machine={machine} setStart={setStart}  setMachine={setMachine} /> }
            { machine._id && start && <Casino machine={machine} setStart={setStart}  setMachine={setMachine} /> }
            
        </div>
    )
};
