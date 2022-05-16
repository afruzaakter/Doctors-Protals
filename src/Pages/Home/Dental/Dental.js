import React from 'react';
import Button from '../../Button/Button';
import dental from '../../../assets/images/treatment.png'

const Dental = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row px-28 p-10">
                    <img src={dental} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='px-28'>
                        <h4 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h4>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dental;