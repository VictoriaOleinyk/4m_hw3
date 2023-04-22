import React from 'react';
import classes from './Inpute.modal.css'

const Input = ({ name, placeholder, onChange }) => {
    return (
        <input className={classes.Input} name={name} placeholder={placeholder} onChange={onChange} />
    );
}

export default Input;