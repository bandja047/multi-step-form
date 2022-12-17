import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import ToggleButton from '../../toggleButton/ToggleButton';
import FormTitle from '../formTitle/FormTitle';
import Plan from './planOption/PlanOption';
import './selectPlan.css'
import { properties } from '../../../data/propertiesPlans';



const SelectPlan = ({onHandleInfoChange}) => {

   
    const [state,setState] = useState({
        type:"pro",
        selected:true
    })

   
   const plansOption =  properties.map((plan)=>{
        if(plan.id===state.type){
            plan.selected = state.selected
        }else if(plan.id!==state.type && plan.selected){
            plan.selected = false
        }
        return <Plan {...plan}  onHandleSelected={handleSelected}/>;
   });
   

    function handleSelected(currentState){

        onHandleInfoChange({...state,...currentState})
      
        setState((prevState)=>({...prevState,...currentState}))
    }
   
    return (
        <div className='selectPlans'>
            <FormTitle title="Select Your Plan" subTitle="you have the option of monthly of yearly" />
            
            <div className='planItems'>

                {plansOption}
               
            </div>

            <div className='frequency'>
                <span style={{marginRight:"18px"}}>Monthly</span> 
                   <ToggleButton/>
                <span style={{marginLeft:"18px"}}>Yearly</span>
            </div>

        </div>
    );
};

export default SelectPlan;