import React from 'react';
import MyOrder from '../My Order/MyOrder';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import userImg from '../../../Images/logo.jpg'
import './Dashboard.css'

const Dashborad = () => {
    return (
        <div class="dashboard m-0 p-0 d-flex align-items-start">

            <div class="d-info nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">

                <div className='my-3'>
                  <img className='userImg my-3' src={userImg} alt="img" />
                  <h5>{'Alif Ahmed'}</h5>
                </div>
                <button class="text-white rounded-0 nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                  My Order
                </button>
                <button class="text-white rounded-0 nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                  Payment
                </button>
                <button class="text-white rounded-0 nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                  Review
                </button>

              </div>

              <div class="d-item bg-body tab-content" id="v-pills-tabContent">

                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <MyOrder></MyOrder>
                  <MyOrder></MyOrder>
                </div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <Payment></Payment>
                </div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                  <Review></Review>
                </div>
            
              </div>
      </div>
    );
};

export default Dashborad;