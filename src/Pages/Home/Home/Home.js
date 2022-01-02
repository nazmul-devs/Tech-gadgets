import React from "react";
import Product from "../../Products/Product/Product";
import Subscribe from "../../Subscribe/Subscribe";
import Banner from "../Banner/Banner";


const Home = () => {
	return (
		<div>
			<Banner />
			<Product />
			<Subscribe></Subscribe>
		</div>
	);
};

export default Home;
