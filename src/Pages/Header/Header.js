import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar
			bg="light"
			className="w-100"
			expand="lg"
			style={{ backgrounClor: "orange" }}
		>
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<NavDropdown title="Category" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								Drone
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Laptop
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Headphone
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#link">Login</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
