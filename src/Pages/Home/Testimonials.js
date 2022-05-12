import React from 'react';
import quote from '../../assets/icons/quote.svg';
import peoples1 from '../../assets/images/people1.png';
import peoples2 from '../../assets/images/people2.png';
import peoples3 from '../../assets/images/people3.png';
import Reviews from './Reviews';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Merry',
            reviews: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
            img: peoples1,
            location: 'california'
        },
        {
            _id: 2,
            name: 'Winson Merry',
            reviews: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
            img: peoples2,
            location: 'california'
        },
        {
            _id: 3,
            name: 'Winson Merry',
            reviews: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
            img: peoples3,
            location: 'california'
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-info  font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What our Patients say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
                }
            </div>


        </section>
    );
};

export default Testimonials;