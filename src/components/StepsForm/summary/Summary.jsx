import React from 'react';
import './summary.css'

const Summary = ({dataSummary}) => {
    const addOns = dataSummary.addOns;

    console.log([...dataSummary.addOns]);
    return (
        <div>
            <h1>Finishing up</h1>
            <h2>Double-check everything looks OK before confirming.

            </h2>

            <div className='planSummary'>
                <div className='planSummaryItems'>
                    <div>
                        {dataSummary.type}({dataSummary.frequency})
                        <a href="#" >change</a>
                    </div>
                    ${dataSummary.price}/{dataSummary.frequency}
                </div>

                <hr />
                {[...dataSummary.addOns].map((addOn)=>(
                     <p className='coast'>{addOn.title} <span >+${addOn.price}/{addOn.frequency}</span></p>
                ))}
               
            </div>


            <div className='total coast'>
                Total (per year) <span>$120/yr</span>
            </div>
        </div>
    );
};

export default Summary;