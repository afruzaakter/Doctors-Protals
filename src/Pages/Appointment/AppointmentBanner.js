import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='mx-16'>
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='chair' />
                </div>
                <div className='px-28'>
                    <DayPicker
                        mode="single" 
                        selected={date}
                        onSelect={setDate}
                        required
                        // onDayClick={onDayClick}
                    />


                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;