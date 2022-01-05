import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../../Hooks/useAuth";
import "./OrderPlace.css";

const OrderPlace = (props) => {
	const { user } = useAuth();
	const id = props.ii;

	const [product, setProduct] = useState({});
	useEffect(() => {
		fetch(`http://localhost:5000/product/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
			});
	}, [id]);

	console.log(product);

	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		const orderedPro = data;
		orderedPro.name = product.title;
		orderedPro.price = product.price;
		fetch("http://localhost:5000/oreder", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data2) => {
				if (data2.acknowledged) {
					swal("Good job!", "Product ordered successfully!", "success");
				}
			});
	};

	return (
		<div>
			<h3 className="text-center">Add to card</h3>
			<div className="d-flex justify-content-center ">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="d-flex flex-column w-75 input-form"
				>
					<input
						value={user.displayName}
						{...register("name")}
						className="my-3 py-2 ps-3 rounded "
					/>
					<input
						value={user.email}
						{...register("email")}
						className="mb-3 py-2 ps-3 rounded"
					/>
					<input
						value={product.title}
						className="mb-3 py-2 ps-3 rounded"
					/>
					<input
						value={product.price}
						className="mb-3 py-2 ps-3 rounded"
					/>

					<div className="d-flex align-items-center justify-content-between">
						<button
							type="submit"
							className="btn submit-btn rounded px-4 py-2"
						>
							Order now
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default OrderPlace;
