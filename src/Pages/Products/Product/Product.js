import React, { useState } from 'react';
import ProductData from '../ProductData';
import './Product.css'

const Product = () => {

    const [products, setProducts] = useState(ProductData);
    
    const filterProduct = (categProduct) => {
        const updatedProduct = ProductData.filter((curElem) => {
            return curElem.categorey === categProduct;
        });
        setProducts(updatedProduct);
    }

    return (
        <div className='product text-center py-5'>
            <div className='container px-0'>
                <h3>Our Products</h3>
                <div className='under-line mx-auto'></div>
                <div>
                    <ul className='nav product-category justify-content-around'>
                        <li onClick={() => setProducts(ProductData)} className='nav-item category-item'>All</li>
                        <li onClick={() => filterProduct('Camera')} className='nav-item category-item'>Camera</li>
                        <li onClick={() => filterProduct('Laptop')} className='nav-item category-item'>Laptop</li>
                        <li onClick={() => filterProduct('Headphone')} className='nav-item category-item'>Headphone</li>
                        <li onClick={() => filterProduct('Drone')} className='nav-item category-item'>Drone</li>
                        <li onClick={() => filterProduct('Mobile')} className='nav-item category-item'>Mobile</li>
                    </ul>
                </div>

                <div className="row my-3 g-4">
                    {
                        products.map((product) => { 

                            const {img, title, price, id} = product;

                            return(
                                <div key={id} className="col-lg-3 col-md-6 col-12 ">
                                    <div className="card my-card h-100">
                                        <div className='mt-4'>
                                            <img src={img} className='product-img card-img-top img-fluid' alt="" />
                                        </div>
                                        <div className="card-body text-start">
                                            <p>{title.slice(0,50)}</p>
                                            <div className='d-flex justify-content-between alifn-items-center mt-3'>
                                                <h5 className='price-color'>${price}</h5>
                                                <button className='cat-btn me-2'>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>    
        </div>
    );
};

export default Product;