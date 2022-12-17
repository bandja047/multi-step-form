import React from 'react';
import { useState } from 'react';
import './addOns.css'
const AddOns = ({id, title, value, price, frequency,checked,onHandleChecked }) => {
   const [check, setChecked] = useState(checked)
    function handleChecked(){
        
           onHandleChecked({
                title:title,
                price:price,
                value:value,
                frequency:frequency,
                checked:!check
           })
        
           
       
      setChecked(!check)

     
    }
   
    console.log('render');
    return (
        <div className='addOns'>
            <div className='checkbox'>
                <input id={id} type='checkbox' onChange={handleChecked} checked={check}/>
            </div>

            <div className='checkBoxLabel'>
                <label htmlFor={id}>{title}</label>
                <label className="checkboxDesc" htmlFor={id}>{value}</label>
            </div>

            <label htmlFor={id} className='addOnsPrice'>+$p{price}/{frequency}</label>
        </div>
    );
};

export default AddOns;