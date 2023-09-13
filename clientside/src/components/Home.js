import React from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";
import Resume from "../assets/docs/RResume.pdf";
/* eslint-disable jsx-a11y/alt-text */
import "../css/index.css";
import Contact from "../components/Contact";
import Techstack from "../components/techStack";
import Playlist from "./Playlist";
import Skillspro from "../components/skillspro";
import Experience from "../components/Experience";
import down_arrow from "../images/ic_down_arrow.png";


class Home extends React.Component {
  // eslint-disable-next-line no-useless-constructor

  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      showPopup: false,
    };
  }

  componentDidMount() {}
  setShowMore = (showMore) => {
    this.setState({ showMore });
  };
  setShowLess = () => {
    this.setState({ showMore: false });
  };
  showPopup = () => {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup,
    }));
  };

  render() {
    const { showMore, showPopup } = this.state;
    // const [showMore, setShowMore] = useState(false);

    return (
      <>
        <div className="container home_container">
          <div className="home_innerdiv">
            <div className="left_div">
              <h2 id="home">
                Welcome to{" "}
                <span style={{ color: "#139ff0" }}>
                  Rupesh Gupta's Portfolio
                </span>
              </h2>
              <p
                style={{
                  color: "#ffffff",
                  letterSpacing: ".5px",
                  marginTop: 2,
                }}
              >
                {showMore ? (
                  <>
                    I am a motion graphics designer seeking a challenging
                    position where I can utilize my expertise in producing
                    high-quality motion graphics for TV, digital platforms, and
                    video promos. With a focus on innovative ideation and
                    conceptualization skills, I aim to contribute to the growth
                    of projects by creating visually appealing and engaging
                    content. I have experience working with various clients and
                    projects, utilizing software such as Adobe After Effects,
                    Cinema 4D, and Maya. My attention to detail, creative
                    process, adaptability, and ability to meet tight deadlines
                    make me a valuable asset in the field of motion graphics
                    design. 
                    As a hobby love to create videos using socail
                    platforms like Youtube and facebook and to know more here
                    you can contact direct through my handles{" "}
                    <a
                      href="https://www.instagram.com/aafno_rupesh/"
                      className="profile-details-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      profile{" "}
                    </a>
                    {" "}
                    and for interactions direct contact through{" "}
                    <a href="/Contact" className="profile-details-link">
                      my email.
                    </a>
                  </>
                ) : (
                  <>
                  I am a motion graphics designer seeking a challenging
                    position where I can utilize my expertise in producing
                    high-quality motion graphics for TV, digital platforms, and
                    video promos. With a focus on innovative ideation and
                    conceptualization skills, I aim to contribute to the growth
                    of projects by creating visually appealing and engaging
                    content. I have experience working with various clients and
                    projects, utilizing software such as Adobe After Effects,
                    Cinema 4D, and Maya. My attention to detail, creative
                    process, adaptability, and ability to meet tight deadlines
                    make me a valuable asset in the field of motion graphics
                    design. 
                    
                    <span
                      onClick={() => this.setShowMore(true)}
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        marginRight: "1.5rem",
                        opacity: "90%",
                      }}
                    >
                      {" "}
                      See More
                    </span>
                  </>
                )}
                {showMore && (
                  <span
                    onClick={() => this.setShowLess()}
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      opacity: "80%",
                      marginRight: "0.5rem",
                    }}
                  >
                    {" "}
                    Show Less
                  </span>
                )}
              </p>
              <div className="btn_div mt-4">
                <Button
                  variant="danger"
                  style={{
                    letterSpacing: "1px",
                    border: "none",
                    borderRadius: 4,
                    background: "#7069f5",
                    marginRight: 24,
                  }}
                  onClick={this.showPopup}
                >
                  View Blogs
                </Button>
                <Button className="hey_button">
                  <a
                    className="btn btn-cv "
                    href={Resume}
                    download="RResume.pdf"
                  >
                    My Resume
                  </a>
                </Button>
              </div>
              {showPopup && (
                <p className="popup-message">Blogs are coming soon</p>
              )}
            </div>
            <div className="right_div">
              <img src="pp.png" alt="" />
            </div>
          </div>
        </div>
        <div className={"dashboard-down-arrow-container"}>
          <a href="#Footer" className={"menu-item-txt"}>
            <img
              src={down_arrow}
              className={"dashboard-down-arrow"}
              alt=" Arrow"
            />
          </a>
        </div>
        <Experience />
        <Techstack />
        <Skillspro />
        <Playlist />
        <div id="Footer">
          <Contact />
        </div>
      </>
    );
  }
}

export default Home;
