import React from 'react';
import './inputForm.css';

const InputForm = ({refs,label,type,name,placeholder,required, onHandleChange}) => {

   
    function onChange(e){
        onHandleChange(e.target.name,refs.current.value)
       
    }
    
    return (
       
        <div className='inputForm'>
            <label >{label}</label>
            <input type={type} placeholder={placeholder} name = {name} {...required} ref={refs} onChange={e=>onChange(e)}/>
        </div>
   
    );
};

export default InputForm;