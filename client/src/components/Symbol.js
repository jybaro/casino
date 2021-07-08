import React from 'react'
import cherry from "./../images/cherry.svg";
import lemon from "./../images/lemon.svg";
import orange from "./../images/orange.svg";
import watermelon from "./../images/watermelon.svg";

export const Symbol = ({type}) => {
    return (
        <div className="symbol__container">
                { type === 0 && <img className="symbol__image" src={ cherry }></img> }
                { type === 1 && <img className="symbol__image" src={ lemon }></img> } 
                { type === 2 && <img className="symbol__image" src={ orange }></img> }
                { type === 3 && <img className="symbol__image" src={ watermelon }></img> }
        </div>
    )
}
