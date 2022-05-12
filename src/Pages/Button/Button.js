import React from 'react';

const Button = ({children}) => {
    return (
        <div>
             <button className="btn border-none bg-gradient-to-r from-cyan-500 to-blue-500 font-bold uppercase
                    text-white text-base font-3">Get Started</button>
        </div>
    );
};

export default Button;