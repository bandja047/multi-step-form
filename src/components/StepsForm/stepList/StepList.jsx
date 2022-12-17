import React from 'react';
import Step from '../step/Step';
import './stepList.css';
const StepList = () => {
    return (
        <div className='step-list'>
               <Step number ="1" title="Step 1" value="YOUR INFO"/>
               <Step number ="2" title="Step 2" value="SELECT PLAN"/>
               <Step number ="3" title="Step 3" value="ADD-ONS"/>
               <Step number ="4" title="Step 4" value="SUMMARY"/>
        </div>
    );
};

export default StepList;