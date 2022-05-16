import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            {/* <div className='text-center '> <button className="btn btn-info text-white loading  mt-5">loading</button></div> */}

            <div className="flex items-center justify-center space-x-2  animate-pulse">
                
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                <div className="w-8 h-8 bg-black rounded-full"></div>
            </div>


        </div>
    );
};

export default Loading;