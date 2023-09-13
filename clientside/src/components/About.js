import React from "react";
import "./About.css";
import Certificates from "./Certificates";

const About = () => {
  return (
    <>
      <div
        className="container mb-3 about_container"
        style={{ minHeight: "100%" }}
      >
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 640}}>
            <h2>Meet Rupesh Gupta</h2>
            <p
              style={{ color: "#ffffff", letterSpacing: "0.0px",marginTop: 2 }}
              // textAlign:"center",justifyContent: "center", alignItems: "center",
            >
              I am a motion graphics designer seeking a challenging position
              where I can utilize my expertise in producing high-quality motion
              graphics for TV, digital platforms, and video promos. With a focus
              on innovative ideation and conceptualization skills, I aim to
              contribute to the growth of projects by creating visually
              appealing and engaging content. I have experience working with
              various clients and projects, utilizing software such as Adobe
              After Effects, Cinema 4D, and Maya. My attention to detail,
              creative process, adaptability, and ability to meet tight
              deadlines make me a valuable asset in the field of motion graphics
              design. As a hobby love to create videos using socail platforms
              like Youtube and facebook and to know more here you can contact
              direct through my handles{" "}
              <a
                href="https://www.instagram.com/aafno_rupesh/"
                className={"profile-details-link"}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                profile{" "}
              </a>{" "}
              and for interactions direct contact through{" "}
              <a href="/Contact" className={"profile-details-link"}>
                my email.
              </a>
            </p>
            {/* <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reiciendis tenetur ex laudantium nam molestiae eius totam assumenda? Ipsa distinctio eum fugit cum adipisci error? Maiores dignissimos amet eaque culpa, recusandae cumque in qui praesentium autem, vero fuga! Doloremque, deserunt.</p> */}
          </div>
          <div className="right_container m-4">
            <img src="pp.png" alt="" />
          </div>
        </div>
        <Certificates />
      </div>
    </>
  );
};

export default About;
