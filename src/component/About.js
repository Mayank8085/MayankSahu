import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import aboutImage from "../assets/images/about.png";
import Resume from "../assets/file/MayankSahuResume.pdf";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <div className="container mt-5 py-5" id="about">
        <div className="row">
          <div className="col-md-6 text-center col-12">
            <img src={aboutImage} alt="about" className="img-fluid" />
          </div>
          <div className="col-md-6 col-12 text-center mt-4">
            <h1 className="text-center fs-1 bolder">About Me</h1>
            <p className="fs-5 text-center p-3 mb-4">
              👋I'm Mayank Sahu, from Pune, India. A self-taught developer. I'm
              passionate about web development and am eager to learn about new
              technologies . I'm currently working on an exciting project and
              looking forward to collaborate on Web related projects especially
              involving MERN Stack.
            </p>
            <button
              type="button"
              class="btn text-white px-3 text-center rounded   neu-div"
              onClick={() => {
                window.open(Resume, "_blank");
              }}
            >
              <h4 className=" font-weight-bold">
                Download Resume
                <FontAwesomeIcon icon="fa-solid fa-download" className="px-2" />
              </h4>
            </button>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default About;
