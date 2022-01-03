import React from "react";
import "./banner.css";

const Banner = () => {
	return (
		<div className="banner  d-flex align-items-center">
			<div className="bannerText text-center">
				<h2 className="fw-bold">
					Wellcome to <span style={{ color: "orange" }}>Tech Gadgets</span>{" "}
				</h2>
				<p className="text-justify my-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
					atque animi eaque temporibus ducimus laborum. Lorem ipsum dolor,
					id!
				</p>
				<button className="btn explore-btn rounded-pill px-5">
					explore{" "}
				</button>
			</div>
		</div>
	);
};

export default Banner;
