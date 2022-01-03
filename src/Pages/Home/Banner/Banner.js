import React from "react";
import "./banner.css";
const bannerImg =
	"https://images.unsplash.com/photo-1515940175183-6798529cb860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FkZ2V0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

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
					sit amet consectetur adipisicing elit. Delectus esse architecto
					animi, accusamus illum tenetur consequuntur vel perspiciatis sint
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
