import React from "react";
import { Card, CardGroup, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import footerData from "./footerData.json";
const FooterMain = () => {
	return (
		<footer className="row justify-content-between my-footer align-items-center mt-5 text-center bg-light">
			<div className="col-lg-4 mb-2">
				<h5>contact Us</h5>
				<hr className="w-50 m-auto" />
				<p>Uttara,Dhaka-1230,Bangladesh</p>
				<p>tech@gadget.com</p>
				<p>+088-12345678</p>
				<p>Open Time: 8:00AM - 6:00PM</p>
			</div>
			<div className="col-lg-4">
				<Row xs={2} md={2} lg={2} className="g-4">
					{footerData.map((feature) => {
						const { heading, features } = feature;
						return (
							<Col>
								<h3>{heading}</h3>
								<ListGroup variant="flush">
									{features.map((featureText) => (
										<Link>
											<ListGroup.Item>{featureText}</ListGroup.Item>
										</Link>
									))}
								</ListGroup>
							</Col>
						);
					})}
				</Row>
			</div>
			<div className="col-lg-4 mb-2">
				<CardGroup>
					{footerData[0].photos.map((photo) => (
						<Card>
							<Card.Img variant="top" src={photo} />
						</Card>
					))}
				</CardGroup>
			</div>
		</footer>
	);
};

export default FooterMain;
