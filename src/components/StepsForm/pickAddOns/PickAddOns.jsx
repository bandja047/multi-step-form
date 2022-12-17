import React, { useRef } from 'react';
import FormTitle from '../formTitle/FormTitle';
import AddOns from './addOns/AddOns';
import './pickAddOns.css';


const propertiesAddOns = [
    {
        id: "os",
        title: "Online Service",
        value: "Access to multiplayer games",
        price: "1",
        frequency: "mo"
        ,
        checked: true
    },
    {
        id: "ls",
        title: "Larger storage",
        value: "Extra 1TB of cloud save",
        price: "2",
        frequency: "mo"
        ,
        checked: true
    },
    {
        id: "cp",
        title: "Customizable profile",
        value: "Custom theme on your profile",
        price: "2",
        frequency: "mo",
        checked: true
    }
]
const PickAddOns = ({onHandleInfoChecked}) => {

    console.log("rendered");

    function handleChecked(value){
      
       
    }

    const addOns = propertiesAddOns.map((addOns) => (
        <AddOns
            {...addOns}  onHandleChecked={handleChecked}  />
    ))

    return (
        <div className='pickAddOns'>

            <FormTitle title="Pick add-ons" subTitle="Add-ons help enhance your gaming experience" />

            <div className="addOnsItems">
                {addOns}
            </div>

        </div>
    );
};

export default PickAddOns;