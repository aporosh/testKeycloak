import React from "react";
import classes from './ButtonClassic.module.css';

const ButtonClassic = ({children, ...props}) => {
    return (
        <button 
            className={classes.buttonClassic + (props.classes ? ' ' + props.classes : '')}
            onClick={props.onClick}
            disabled={props.disabled}
        >

            {children}
        </button>
    )
}

export default ButtonClassic;