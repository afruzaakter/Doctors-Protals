import React from 'react';

const Service = ({ service, setTreatment }) => {
  // console.log(service);
  const { name, slots } = service
  console.log(name);
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className=" text-info font-bold text-2xl">{name}</h2>
        <p>
          {
            slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date</span>
          }
        </p>

        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}available</p>
        <div className="card-actions justify-center px-10 mx-[-28]">
          
          <label htmlFor="booking-modal" onClick={() => setTreatment(service)}
          className="btn btn-info text-white  " disabled={slots.length === 0}>Book Apointment</label>
          
          
        </div>
      </div>
    </div>
  );
};

export default Service;