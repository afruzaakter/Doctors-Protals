import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png'
import Button from '../../Button/Button';
const MakeAppointmentPage = () => {
    return (
        <section style={{
            background: `url(${appointment})`
          }} className='flex items-center justify-center'>
               <div className='flex-1 hidden lg:block'>
                 <img className='mt-[-100px]' src={doctor} alt="" />
               </div>
               <div className='text-white flex-1 p-10'>
                <h3 className='text-xl text-info'>Appointment </h3>
                <h2 className='text-2xl'>Make an Appointment Today</h2>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aperiam quas, hic error, at soluta sunt necessitatibus quod porro dolorem, deserunt id fugit saepe! Earum eaque perspiciatis commodi officia velit!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aperiam quas, hic error, at soluta sunt necessitatibus quod porro dolorem, deserunt id fugit saepe! Earum eaque perspiciatis commodi officia velit! </p>
               <Button></Button>
               </div>
          </section>
    );
};

export default MakeAppointmentPage;