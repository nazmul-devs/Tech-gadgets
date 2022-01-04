import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
	const { register, handleSubmit, watch } = useForm();
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
							<button className="btn text-secondary">
								Forget Password ?
							</button>
						</div>
					</form>
				</div>
				<div className="d-flex justify-content-center">
					<div className="login-grp mt-4 d-flex justify-content-between align-items-center w-75">
						<div className="login-items">
							<button
								className="btn rounded-circle text-white m-1"
								style={{ background: "#cc3333" }}
							>
								<i className="fab fa-google"></i>
							</button>
							<button
								className="btn rounded-circle text-white m-1"
								style={{ background: "#3b5998" }}
							>
								<i className="fab fa-facebook-f"></i>
							</button>
							<button
								className="btn rounded-circle text-white m-1"
								style={{ background: "#00acee" }}
							>
								<i className="fab fa-twitter"></i>
							</button>
						</div>
						<p className="text-secondary">
							Have an account? <Link to="/register">Register</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
