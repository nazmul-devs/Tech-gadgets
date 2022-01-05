import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='container text-center pt-4'>
                <h5 className='text-white'>NEED HELP? CALL OUR AWARD-WINNING</h5>
                <p className='text-white'>SUPPORT TEAM 24/7 AT (844) 555-8386</p>
                <div className=' mx-auto'>
                    <input className='subs-input col-8 col-lg-5' type="email" placeholder='Enter your email' name="" id="" />
                    <button className='subs-btn col-3 col-lg-2'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;