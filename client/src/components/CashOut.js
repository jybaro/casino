import React, {useState} from 'react'
import {config} from './../config'

export const CashOut = ({machine, setMachine, setStart}) => {
    const [disabled, setDisabled] = useState();
    const handleClick = (e) => {
        cashOut();
    }
    
    const cashOut = async () => {
        const response = await fetch(config.apiURL + '/cashout/' + machine._id);
        const data = await response.json();
        console.log('desde el servicio:', data);
        setMachine(data);
        setStart(false);
    }

    const handleMouseOver = (e) => {
        if (Math.random() <= 0.5) {
            move(e.target);
        }
        if (Math.random() <= 0.4) {
            setDisabled(true);
        }
    }

    const move = (target) => {
        const radius = 300;
        const radians = Math.random() * 2 * Math.PI;
        const domRect = target.getBoundingClientRect();
        console.log('domRect', domRect)
        console.log('radians', radians)
        function getCircleX(radians) {
            return Math.cos(radians) * radius;
        }
        function getCircleY(radians) {
            return Math.sin(radians) * radius;
        }

        const x = domRect.left + getCircleX(radians);
        const y = domRect.top + getCircleY(radians);
        console.log('x', x)
        console.log('y', y)

        target.style.position = "absolute";
        target.style.left = x + 'px';
        target.style.top = y + 'px';

    }
    return (
        <div className="h-48 grid items-center justify-items-center">
            <button 
                className={(disabled ? "bg-gray-500" : "bg-red-500 hover:bg-red-700") + " text-white font-bold py-2 px-4 rounded"}
                onClick={handleClick}
                disabled={disabled}
                onMouseOver={handleMouseOver}
            >CASH OUT</button>
        </div>
    )
}
