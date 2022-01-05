import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Images/logo.jpg";

const Header = () => {
	const { user, logout } = useAuth();
	return (
		<Navbar
			className=" text-white sticky-top"
			expand="md"
			style={{ background: "#FFAE03" }}
		>
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="fw-bold">
					<Link to="/">
						<img className="" width={100} src={logo} alt="" />
					</Link>
					<Nav className="ms-auto">
						<Nav.Link className="text-white" as={Link} to="/">
							Home
						</Nav.Link>

						<Nav.Link className="text-white" as={Link} to="/dashboard">
							Dashboard
						</Nav.Link>
						<Nav.Link className="text-white" as={Link} to="/login">
							Card
						</Nav.Link>
						<Nav.Link className="text-white" as={Link} to="/add">
							Add Product
						</Nav.Link>
						<Nav.Link className="text-danger" >
							{user.displayName}
						</Nav.Link>
						{!user.email && <Nav.Link className="text-white" as={Link} to="/login">
							<button
								className="btn rounded-pill px-3 py-1 fw-bold text-white"
								style={{ background: "dodgerblue" }}
							>
								Login
							</button>
						</Nav.Link>}
						{user.email && <Nav.Link className="text-white">
							<button
								className="btn rounded-pill px-3 py-1 fw-bold text-white"
								style={{ background: "dodgerblue" }}
								onClick={logout}
							>
								<i className="fas fa-sign-in-alt"></i> Logout
							</button>
						</Nav.Link>}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
