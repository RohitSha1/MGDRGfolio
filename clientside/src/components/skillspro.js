import React from "react";
import "../components/Techstack.css";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import { CreativeList } from "../utils/creativeList"
const Skillspro = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <RubberBand>
        {/* <div className="boxdesign text-center">
            <h2 className='text-center mt-2'>SKILLS</h2>
          </div>  */}
          {/* <h2 className="col-12 mt-1 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2> */}
          
          <p className="pb-2 mt-0 text-center text-white">
            My others skills and experience at work as a proffessonal. 
          </p>
          <hr />
        </RubberBand>
        <div className="row">
          {CreativeList.map((tech) => (
            <Fade left>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2 hello">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skillspro;
