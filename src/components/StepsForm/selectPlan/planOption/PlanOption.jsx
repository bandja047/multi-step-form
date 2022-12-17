import React from 'react';

import './planOption.css'

const PlanOption = (props) => {

    const {key,id,ref,image,type,price,frequency,selected,onHandleSelected} = props

    const className = selected ? "selected" : ""
        
    function onHandleClick(){
      
        onHandleSelected({
             type:id,
             selected : !selected ,
             frequency:frequency,
             price:price
        });
    }
 
    return (
        <div key={key} id={id} ref={ref} className={`planChoice ${className}`} onClick={onHandleClick}>
            <img src={image} alt=""/>
            <h2>{type}</h2>
            <p>${price}/{frequency}</p>
        </div>
    );
};

export default PlanOption;