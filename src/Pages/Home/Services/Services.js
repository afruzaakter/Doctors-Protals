import React, { useState } from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from '../Service/Service';

const Services = () => {
  
    const services =[
        {
           _id: 1,
           name: "Fluoride Treatment",
   
           description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
           img: fluoride

        },
        {
           _id: 2,
           name: "Fluoride Treatment",
   
           description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
           img: cavity

        },
        {
           _id: 3,
           name: "Fluoride Treatment",
   
           description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
           img: whitening

        }
    ]
    return (
      <div className='my-28'>
            <div className='text-center'>
            <h3 className='text-info font-bold text-2xl uppercase'>Our Services</h3>
            <h2 className='text-4xl font-bold'>Services We Provide</h2>
        </div>
     <div className=' mt-28 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
         {
             services.map(service =><Service key={service._id} service={service}>

             </Service>)
         }
     </div>

      </div>
    );
};

export default Services;