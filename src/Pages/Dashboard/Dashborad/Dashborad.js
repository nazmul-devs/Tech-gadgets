import React from 'react';
import MyOrder from '../My Order/MyOrder';
import './Dashboard.css'
import userImg from '../../../Images/logo.jpg'

const Dashborad = () => {
    return (
        <div className='container-fluid m-0 p-0'>
            <div className='dashboard'>
                <div className='d-info'>
                  <img className='userImg my-3' src={userImg} alt="img" />
                  <h5>{'Alif Ahmed'}</h5>
                  <ul className='p-0'>
                      <li>My Order</li>
                      <li>Payment</li>
                      <li>Review</li>
                  </ul>
                </div>
                <div className='d-item bg-body'>
                    <MyOrder></MyOrder>
                </div>
            </div>
        </div>
    );
};

export default Dashborad;