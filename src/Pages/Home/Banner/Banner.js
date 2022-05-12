import React from 'react';
import banner from '../../../assets/images/chair.png'
import Button from '../../Button/Button';
const Banner = () => {
    return (
        <div className="hero min-h-screen  px-16 ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src= {banner} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='px-10'>
                    <h1 className="text-5xl font-bold ">Box Office News!</h1>
                    <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi  exercitationem quasi. In deleniti eaque aut  repudiandae et a id nisi.</p>
                   <Button></Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;