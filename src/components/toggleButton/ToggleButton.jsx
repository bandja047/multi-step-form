import React from 'react';
import './toggleButton.css';

const ToggleButton = () => {
   function handleChange(e){

    }
    return (
        
            <label className="switch">
                <input type="checkbox" checked  onChange={e=>handleChange(e)}/>
                <span className="slider round"></span>
            </label>
        
    );
};

export default ToggleButton;