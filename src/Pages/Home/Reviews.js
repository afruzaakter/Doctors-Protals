import React from 'react';

const Reviews = ({ review }) => {
    const { img, name, reviews ,location} = review;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
                <div className="card-body">
                    <p>{reviews}</p>
                    <div className='flex justify-center items-center'>
                        <div className="avatar mx-3">
                            <div className="m-5 w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img className='my-1' src={img} alt='' />
                            </div>
                        </div>
                       <div>
                       <h4>{name}</h4>
                        <p>{location}</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;