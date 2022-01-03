import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";

const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	console.log(watch("example"));
	return (
		<div className="login">
			<div className="login-card">
				<h2 className="text-center my-3">Login here</h2>
				<div className="d-flex justify-content-center ">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="d-flex flex-column w-75 input-form"
					>
						<input
							type={"email"}
							placeholder="Your email"
							{...register("example")}
							className="my-3 py-2 ps-3 rounded-pill"
						/>
						<input
							placeholder="Your password"
							{...register("example")}
							className="mb-3 py-2 ps-3 rounded-pill"
						/>

						<button type="submit" className="btn rounded-pill px-4 py-2">
							Logn
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
