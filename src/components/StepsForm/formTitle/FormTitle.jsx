import React from 'react';
import './formTitle.css'

const FormTitle = ({ title, subTitle }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
        </>
    );
};

export default FormTitle;