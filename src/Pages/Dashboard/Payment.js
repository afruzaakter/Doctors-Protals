import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    console.log(url);
    const { data: appointment, isLoading } = useQuery(['booking',id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-28 my-12'>
            <div class="card w-96 bg-base-100 shadow-xl text-primary-content">
                <div class="card-body">
                <p className="text-success text-2xl font-bold">Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Pay for {appointment.treatment}</h2>
                    <p>We will see you on <span className='text-orange-700'> {appointment.date} </span>
                         at { appointment.slot} </p>
                    <p>Please pay: ${appointment.price}</p>
                   
                </div>
            </div>

            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                   
                </div>
            </div>

        </div>
    );
};

export default Payment;