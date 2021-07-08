import React, {useState} from 'react'
import {config} from './../config'

export const Lever = ({machine, setMachine, setStart, setScrollingBox1, setScrollingBox2, setScrollingBox3, setHideInfo}) => {
    const [disabled, setDisabled] = useState(false);
    const handleClick = (e) => {
        tryLuck();
    }
    
    const tryLuck = async () => {
        const response = await fetch(config.apiURL + '/tryluck/' + machine._id);
        const data = await response.json();
        setMachine(data);
        setStart(true);
        setScrollingBox1(true);
        setScrollingBox2(true);
        setScrollingBox3(true);
        setDisabled(true);
        setHideInfo(true);
        setTimeout(()=>setScrollingBox1(false), 1000);
        setTimeout(()=>setScrollingBox2(false), 2000);
        setTimeout(()=>{
            setScrollingBox3(false);
            setHideInfo(false);

            if (machine.credits <= 0 && machine.sessionCredits <= 0) {
                setTimeout(()=>{
                    setStart(false);
                    setDisabled(false);  
                }, 2000);
            } else {
                setDisabled(false);        
            }
        }, 3000);
    }
    return (
        <div className=" h-48 grid items-center justify-items-end">
            <button 
                className={"text-white font-bold py-2 px-4 rounded " + (disabled ? "bg-gray-300": "bg-purple-600 hover:bg-purple-700") }
                onClick={handleClick}
                disabled={disabled}
            >Probar suerte!</button>
        </div>
    )
}
