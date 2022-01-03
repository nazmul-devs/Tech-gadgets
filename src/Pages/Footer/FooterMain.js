import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faYoutubeSquare,faTwitterSquare,faGithubSquare } from '@fortawesome/free-brands-svg-icons';
 import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import {Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerData from './footerData.json'
import './FooterMain.css'
const FooterMain = () => {
    return (
<footer className="row justify-content-between my-footer align-items-center mt-5 text-center bg-light">
<div className="col-lg-4 mb-2">
  <h5>contact Us</h5>
  <hr className='w-50 m-auto'/>
  <p>Uttara,Dhaka-1230,Bangladesh</p>
  <p>tech@gadget.com</p>
  <p>+088-12345678</p>
  <p>Open Time: 8:00AM - 6:00PM</p>
  
</div>
<div className="col-lg-4">
<Row xs={2} md={2} lg={2} className="g-4">
   {
       footerData.map(feature=>{
           const{heading,features}=feature
           return(
            <Col>
            <h3>{heading}</h3>
            <hr className='w-75 m-auto'/>
            <ListGroup variant="" className="border-0 mt-3">
          {features.map(featureText=><Link><ListGroup.Item>{featureText}</ListGroup.Item></Link>)}
        </ListGroup>
            </Col>
           )
       })
   }
</Row>
  
</div>
<div className="col-lg-4 mb-2">
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
           <span className="fs-2 mx-2"><FontAwesomeIcon icon={faGithubSquare} /></span>
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faYoutubeSquare} /></span>
           <span className="fs-2 mx-2"><FontAwesomeIcon icon={faTwitterSquare} /></span>
           <p>Tech Gadget<span className="fs-6"><FontAwesomeIcon icon={faCopyright}/></span> AllRight reserve</p>
         </div>
</footer>
 );
};

export default FooterMain;
