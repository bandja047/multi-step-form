import React, { useState } from 'react';


import SideBar from '../../components/StepsForm/sideBar/SideBar';
import PersonalInfo from '../../components/StepsForm/personalInfo/PersonnalInfo';
import SelectPlan from '../../components/StepsForm/selectPlan/SelectPlan';

import Summary from '../../components/StepsForm/summary/Summary';

import PickAddOns from '../../components/StepsForm/pickAddOns/PickAddOns';
import Success from '../../components/StepsForm/success/Success';


import './planForm.css';
import { useEffect } from 'react';
import { useRef } from 'react';

const state = {
    
    name: "",
    email: "",
    phone: "",
    price:"",
    type:"",
    frequency:"",
    addOns : []

    
}

const maxStep = 5;

const minStep = 1;

const PlanForm = () => {

    const [step, setStep] = useState(1)
    const formData = useRef(state)


    useEffect(()=>{
        console.log({...formData.current})
    },[step])

    console.log("render")

    function nextStep() {

      
       
       setStep((prevStep => prevStep+1))

      
       
    }

    function handleChange(value){
      console.log({...formData.current,...value})
      formData.current = {...formData.current,...value}
    }


    function handleInfoChecked(value)
    {  
         console.log(value)
        formData.current = {...formData.current,addOns:value}

    }
    function SwitchStep(step){
        switch(step){
            case 1 : {
                return <PersonalInfo onHandleInfoChange={handleChange}/>
            }

            case 2 : return <SelectPlan onHandleInfoChange={handleChange}/>

            case 3 : return <PickAddOns onHandleInfoChecked={handleInfoChecked}/>

            case 4 : return <Summary dataSummary={formData.current}/>

            default: return <Success/>
        }
    }


    function renderBtnStep(step){

        if(step===maxStep){
            return;
        }
        else if(step===minStep){
            return (
                <div className="stepBtn">
                            
                                  
                 
                 <button className='btnNextStep' onClick={nextStep}>Next Step</button>
             
            
          </div>) 
        }

      return(
      <div className="stepBtn">
                  
                        
       <button className='btnPreviousStep' onClick={prevStep}>Go Back</button>
       <button className='btnNextStep'  onClick={nextStep}>Next Step</button>
   
  
</div>)
       
    }
    function prevStep() {
        setStep((prevtStep => step-1))
    }

    return (
        <>
            <SideBar />
      
            <div className='planForm'>

                {SwitchStep(step)}

                {renderBtnStep(step)}
            </div>





        </>

    );
};

export default PlanForm;