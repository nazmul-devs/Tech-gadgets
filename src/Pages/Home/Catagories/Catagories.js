import React from "react";

const Catagories = () => {
	return (
		<div className="container mb-5">
			<h3 className="py-5 text-center">SHOP BY CATEGORIES</h3>

			<div className="row row-cols-1 row-cols-md-4 g-4">
				<div className="col">
					<div className="card h-100">
						<img
							src="http://magento2.magentech.com/themes/sm_zumi/pub/media/catalog/category/img-hot-categories-1_1.jpg"
							className="card-img-top p-3"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Furniture</h5>
							<p className="card-text">
								This is a longer card with supporting text below as a
								natural lead-in to additional content. This content is a
								little bit longer.
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img
							src="http://magento2.magentech.com/themes/sm_zumi/pub/media/catalog/category/img-hot-categories-2.jpg"
							className="card-img-top p-3"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Flashlights & Lamps</h5>
							<p className="card-text">This is a short card.</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img
							src="http://magento2.magentech.com/themes/sm_zumi/pub/media/catalog/category/img-hot-categories-3.jpg"
							className="card-img-top p-3"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Bags, Shoes & Accessories</h5>
							<p className="card-text">
								This is a longer card with supporting text below as a
								natural lead-in to additional content.
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img
							src="http://magento2.magentech.com/themes/sm_zumi/pub/media/catalog/category/img-hot-categories-4.jpg"
							className="card-img-top p-3"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Holiday Supplies & Gifts</h5>
							<p className="card-text">
								This is a longer card with supporting text below as a
								natural lead-in to additional content. This content is a
								little bit longer.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catagories;
