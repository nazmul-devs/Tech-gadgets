import React from "react";
import Product from "../../Products/Product/Product";
import Subscribe from "../../Subscribe/Subscribe";
import Banner from "../Banner/Banner";
import Catagories from "../Catagories/Catagories";

const Home = () => {
	return (
		<div>
			<Banner />
			<Catagories />
			<Product />
			<Subscribe></Subscribe>
		</div>
	);
};

export default Home;
