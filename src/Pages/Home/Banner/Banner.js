import React from "react";
import "./banner.css";

const Banner = () => {
	return (
		<div className="banner d-flex align-items-center">
			<div className="bannerText  container">
				<h2 className="fw-bold">
					Welcome to <br /><span style={{ color: "orange" }}>Tech Gadgets</span>{" "}
				</h2>
				<p className="text-start my-3">
					We provided our best services. We are very friendly with our customers. <br /> So you can choose us to buy your Product.
				</p>
				<button className="btn explore-btn rounded-pill px-5">
					explore{" "}
				</button>
			</div>
		</div>
	);
};

export default Banner;
