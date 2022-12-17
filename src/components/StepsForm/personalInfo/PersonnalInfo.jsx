import React, { useRef } from 'react';
import FormTitle from '../formTitle/FormTitle';
import InputForm from './inputForm/InputForm';
import './personalInfo.css'



const PersonnalInfo = ({onHandleInfoChange}) => {

    const inputName = useRef('');
    const inputEmail = useRef('');
    const inputPhone = useRef('');

    const info = useRef({name:"",
    phone:"",
    email:""})
  
    function handleChange(name,value){

        info.current = {...info.current,[name]:value}
       
        onHandleInfoChange(info.current);
    }

    

    return (
        <div  >
            <FormTitle title="Personal Info" subTitle="Please provide your name.
                email address, and phone number."/>
            
            <div className='inputItems'>
                <InputForm label="Name" name="name" type="text" placeholder="e.g. Stephen King" required={true} refs={inputName} onHandleChange={handleChange} />
                <InputForm label="Email Address" name="email" type="email" placeholder="e.g. stephenking@lorem.com" required={true} refs={inputEmail} onHandleChange={handleChange} />
                <InputForm label="PhoneNumber" name="phone" type="phone" placeholder="e.g. +1 234 567 890" required={true} refs={inputPhone} onHandleChange={handleChange}/>
            </div>

        </div>
    );
};

export default PersonnalInfo;