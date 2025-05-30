
"use client";

import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { validateField } from '@/utils/validations';


// input field
export const Input = ({setChangeField, field, fieldName}) => {


    const handleChange = (event) => {
        setChangeField((previous)=>({...previous,[event.target.name]:event.target.value}));
    }


    return (  
    <TextField 
    id="standard-basic" 
    label="username" 
    variant="standard" 
    name={fieldName}
    value={field}
    onChange={handleChange}
    /> 
    );
}



//password input field

export const PasswordInput = ({setChangeField, field, fieldName}) => {
    
    
    const handleChange = (event) => {
        setChangeField((previous)=>({...previous, [event.target.name]:event.target.value}));
    }


    return (
    <TextField
    id="standard-password-input"
    label="Password"
    type="password"
    value={field}
    name={fieldName}
    autoComplete="current-password"
    variant="standard"
    onChange={handleChange}
  />
  )
}



export default Input