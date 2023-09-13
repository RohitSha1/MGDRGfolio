import React from "react";
import "../components/Techstack.css";
import RubberBand from "react-reveal/RubberBand";
import CertificateData from "../utils/CertificatesList"
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Fade from "react-reveal/Fade";
const Certificates = () => {
  return (
    <>
      <div className="container certificates" id="certificates">
        <RubberBand>
        <div className="boxdesign text-center">
            <h2 className='text-center mt-2'>Some Designs</h2>
          </div> 
          <hr />
          <p className="pb-2 text-center text-white">
            Collection of Poster and Graphics Designs 
          </p>
        </RubberBand>
        <div className="card_div">
            <div className=" row d-flex justify-content-around align-items-center">
              {
                CertificateData.map((el, index) => {
                  return (
                    <>
                      <Card key={index} style={{ width: '29rem', height: "auto" }} className="mt-4 mb-4 card">
                        <Card.Img variant="top" style={{ width: '100%', height: 'auto', marginTop: 13 }} src={el.imgsrc} />
                        <Card.Body className='d-flex justify-content-center flex-column'>
                          <Card.Title className='text-center'>{el.projectName}</Card.Title>
                        </Card.Body>
                      </Card>
                    </>
                  )
                })
              }

            </div>
          </div>
      </div>
    </>
  );
};

export default Certificates;