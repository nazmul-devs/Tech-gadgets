import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddProduct = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		fetch("http://localhost:5000/products", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data2) => {
				if (data2.acknowledged) {
					swal("Good job!", "Product added successfully!", "success");
				}
			});
		reset();
	};

	return (
		<div>
			<h3 className="text-center py-5">Add Prodcts</h3>
			<div className="d-flex justify-content-center ">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="d-flex flex-column w-50 input-form"
				>
					<input
						placeholder="Product title"
						{...register("title")}
						className="my-3 py-2 ps-3 rounded "
					/>
					<input
						placeholder="Product image"
						{...register("img")}
						className="mb-3 py-2 ps-3 rounded"
					/>
					<input
						placeholder="Product categorey"
						{...register("categorey")}
						className="mb-3 py-2 ps-3 rounded"
					/>
					<input
						placeholder="Product price"
						{...register("price")}
						className="mb-3 py-2 ps-3 rounded"
					/>

					<div className="d-flex align-items-center justify-content-between">
						<button
							type="submit"
							className="btn submit-btn rounded px-4 py-2"
						>
							Add to database
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
