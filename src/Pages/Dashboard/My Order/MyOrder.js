import React, { useEffect, useState } from 'react';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("")
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);
    

    return (

            <div className='container my-5'>
                <h1 className=''>My order List</h1>
                <div>
                    {
                        orders.map(order => <div>{
                            <div className='bg-danger rounded-3 text-white py-3 m-4'>
                                <h6>Order ID</h6>
                                <h3>Name</h3>
                                <h6>Email</h6>
                                <h5>Phone</h5>
                                <h3>Status: <span className='text-warning'>{order.status}</span></h3>
                                <button className='w-25 btn btn-primary text-white' >Cancel Order</button>
                            </div>
                        }</div>)
                    }
                </div>
            </div>
    );
};

export default MyOrder;