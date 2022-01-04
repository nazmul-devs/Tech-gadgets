import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
	const { register, handleSubmit, watch } = useForm();
	const onSubmit = (data) => console.log(data);

	console.log(watch("example"));
	return (
		<div>
			<h3 className="text-center py-5">Add Prodcts</h3>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="d-flex flex-column w-75 input-form"
			>
				<input
					type={"email"}
					placeholder="Your email"
					{...register("example")}
					className="my-3 py-2 ps-3 rounded "
				/>
				<input
					placeholder="Your password"
					{...register("example")}
					className="mb-3 py-2 ps-3 rounded"
				/>

				<div className="d-flex align-items-center justify-content-between">
					<button
						type="submit"
						className="btn submit-btn rounded px-4 py-2"
					>
						Logn
					</button>
					<button className="btn text-secondary">Forget Password ?</button>
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
