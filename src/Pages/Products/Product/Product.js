import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import OrderPlace from "../OrderPlace/OrderPlace";
import "./Product.css";

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header className="py-1" closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Place Your Order
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<OrderPlace ii={props.indexNo}></OrderPlace>
			</Modal.Body>
		</Modal>
	);
}

const Product = () => {
	const [products, setProducts] = useState([]);
	const [filters, setFilters] = useState([]);
	const [modalShow, setModalShow] = React.useState(false);
	const [indexNo, setIndexNo] = useState(0);

	// handle booking
	const handleBookin = (index) => {
		setIndexNo(index);
		setModalShow(true);
	};

	useEffect(() => {
		fetch("http://localhost:5000/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setFilters(data);
			});
	}, []);

	const filterProduct = (categProduct) => {
		const updatedProduct = products.filter((curElem) => {
			return curElem.categorey === categProduct;
		});
		setFilters(updatedProduct);
	};

	return (
		<div className="product text-center py-5">
			<div className="container px-0">
				<h3 style={{ color: "#2c3e50" }} className="text-bold">
					Our Products
				</h3>
				<div className="under-line mx-auto"></div>
				<div className="row g-3 product-category mt-4 d-flex justify-content-center px-md-5 mx-md-5">
					<div
						onClick={() => filterProduct("Camera")}
						className="col-4 col-md-2 category-item"
					>
						Camera
					</div>
					<div
						onClick={() => filterProduct("Laptop")}
						className="col-4 col-md-2 category-item"
					>
						Laptop
					</div>
					<div
						onClick={() => filterProduct("Headphone")}
						className="col-4 col-md-2 text-center category-item"
					>
						Headphone
					</div>
					<div
						onClick={() => filterProduct("Drone")}
						className="col-4 col-md-2 category-item"
					>
						Drone
					</div>
					<div
						onClick={() => filterProduct("Mobile")}
						className="col-4 col-md-2 category-item"
					>
						Mobile
					</div>
				</div>

				<div className="row my-3 g-4">
					{filters.map((product, index) => {
						const { img, title, price, _id } = product;

						return (
<<<<<<< HEAD
							<div key={_id} className="col-lg-3 col-md-6 col-12 ">
=======
							<div key={id} className="col-lg-3 col-md-4 col-12 ">
>>>>>>> 96de619db014ac14472d5e04faeb01ff68885cf0
								<div className="card my-card h-100">
									<div className="m-4 img-div">
										<img
											src={img}
											className="product-img card-img-top img-fluid"
											alt=""
										/>
									</div>
									<div className="card-body text-start">
										<p className="text-primary">{title.slice(0, 50)}. . .</p>
										<div className="d-flex justify-content-between alifn-items-center mt-3">
											<h5 className="price-color">${price}</h5>
											<Button
												className="cat-btn me-2"
												onClick={() => handleBookin(_id)}
											>
												Add To Cart
											</Button>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* use for modal */}
				<MyVerticallyCenteredModal
					indexNo={indexNo}
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</div>
		</div>
	);
};

export default Product;
