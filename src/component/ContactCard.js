import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contactcard = (
    {
        title="Address",
        icon="fa-location-arrow",
        main1="VIIT, Survey No. 3/4,",
        main2="Kondhwa, Pune"
    }
) => {
    return (
        <div className='col-md-4 col-12 mb-4   text-center px-3'>
            
            <div className='bg-dark pt-5 pb-3'>
            <div className='mb-4 ' >
            <FontAwesomeIcon icon={`fa-solid ${icon} `}
            className='rounded-circle border border-info p-4 border-3 fs-3'
            />   
            </div>
            <h3>{title}</h3>
            <p>
                
                   {main1} <br/>{main2}
                
            </p>
            </div>
            
            
            

        </div>
    );
}

export default Contactcard;
