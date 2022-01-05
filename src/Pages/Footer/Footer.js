import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer pt-5">
			<div className="container mb-4">
				<div className="footer-info row g-4">
					<div className="col-12 col-md-5">
						<ul className="f-list">
							<h5>CONTACT US</h5>
							<li>
								<i className="fas fa-home me-2"></i>No 40 Baria Sreet
								133/2 NewYork City, NY, USD.
							</li>
							<li>
								<i className="far fa-envelope me-2"></i>
								Hidesign@Magentech.com
							</li>
							<li>
								<i className="fas fa-phone-alt me-2"></i>(800) 1234 8888
								- (800) 1234 9999
							</li>
							<li>
								<i className="far fa-clock me-2"></i>Open Time: 8:00AM -
								6:00PM
							</li>
						</ul>
					</div>
					<div className="col-12 col-md-4">
						<ul className="f-list">
							<h5>INFORMATION</h5>
							<li>Home</li>
							<li>Dashboard</li>
							<li>Products</li>
							<li>Login</li>
							<li>Contact</li>
						</ul>
					</div>
					<div className="col-12 col-md-3">
						<ul className="f-list">
						    <h5>FOLLOW US</h5>
							<li>
								<i className="fab fa-facebook-f f-icon"></i>
							</li>
							<li>
								<i className="fab fa-twitter f-icon"></i>
							</li>
							<li>
								<i className="fab fa-google-plus-g f-icon"></i>
							</li>
							<li>
								<i className="fab fa-linkedin-in f-icon"></i>
							</li>
							<li>
								<i className="fab fa-pinterest-p f-icon"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="f-copy py-3 text-center">
				<span className="text-center">
					Tech Gadget © 2018 Demo Store. All Rights Reserved
				</span>
			</div>
		</div>
	);
};

export default Footer;
