import React from 'react';
import './step.css';

const Step = (props) => {

    const { number, title, value } = props;

    return (
        <div className='step'>

            <span className='step-number'>{number}</span>
            <div className='step-info'>
                <span className='step-title'>{title}</span>
                <span className='step-value'>{value}</span>
            </div>


        </div>

    );
};

export default Step;