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
				<OrderPlace></OrderPlace>
			</Modal.Body>
		</Modal>
	);
}

const Product = () => {
	const [products, setProducts] = useState([]);
	const [filters, setFilters] = useState([]);
	const [modalShow, setModalShow] = React.useState(false);

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
				<h3>Our Products</h3>
				<div className="under-line mx-auto"></div>
				<div className="">
					<ul className="nav product-category d-flex justify-content-center">
						<li
							onClick={() => filterProduct("Camera")}
							className="nav-item category-item"
						>
							Camera
						</li>
						<li
							onClick={() => filterProduct("Laptop")}
							className="nav-item category-item"
						>
							Laptop
						</li>
						<li
							onClick={() => filterProduct("Headphone")}
							className="nav-item category-item"
						>
							Headphone
						</li>
						<li
							onClick={() => filterProduct("Drone")}
							className="nav-item category-item"
						>
							Drone
						</li>
						<li
							onClick={() => filterProduct("Mobile")}
							className="nav-item category-item"
						>
							Mobile
						</li>
					</ul>
				</div>

				<div className="row my-3 g-4">
					{filters.map((product) => {
						const { img, title, price, id } = product;

						return (
							<div key={id} className="col-lg-3 col-md-6 col-12 ">
								<div className="card my-card h-100">
									<div className="m-4 img-div">
										<img
											src={img}
											className="product-img card-img-top img-fluid"
											alt=""
										/>
									</div>
									<div className="card-body text-start">
										<p>{title.slice(0, 50)}</p>
										<div className="d-flex justify-content-between alifn-items-center mt-3">
											<h5 className="price-color">${price}</h5>
											<Button
												className="cat-btn me-2"
												onClick={() => setModalShow(true)}
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
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</div>
		</div>
	);
};

export default Product;
