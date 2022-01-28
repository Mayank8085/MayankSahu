import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomePhoto from "../assets/images/mayank.jpg";
import Typewriter from "typewriter-effect";

const SubHeading =[
  "Full Stack Developer",
  " Web Developer",
  "MERN Stack Developer",
  "React Developer",

]

const Home = () => {
  return (
    <>
    <div className=" container rounded  my-5 px-5 py-4  "
    id="home"
    >
      
      
      <div className="card"
      style={{
        backgroundColor:"#282A36"
      }}
      >
        <div className="card-body">
          <div className="row ">
          
          <div className="col-md-6 col-12 text-center ">

            <img
              src={HomePhoto}
              className="img-fluid rounded-circle "
              alt="mayank"
              
            />  

          </div>
          <div className="col-md-6 col-12 ps-5  mt-3 order-md-first">
            
            <h1 class="badge rounded-pill bg-info px-3 py-2 fs-5 mb-3">
             Hello I'm
            </h1>
            <h1 className="bolder fs-1 mb-4">Mayank Sahu</h1>
            <h4 className="bolder mb-4">
            
            <Typewriter
              options={{
                strings: SubHeading,
                autoStart: true,
                loop: true,
              }}
            />
            
            
            </h4>
            <h5 className="text-white mb-3">
              <FontAwesomeIcon
                icon="fa-solid fa-phone-alt"
                className="text-info pe-2"
               
              />
               +91 930-753-1964
            </h5>
            <h5 className="text-white mb-4">
              <FontAwesomeIcon
                icon="fa-solid fa-map-marker-alt"
                className="text-info pe-2 "
               
              />
               Pune, Maharshtra India
            </h5>
            <p className="text-white fs-3">
              
              <a href="https://github.com/Mayank8085" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-info pe-4">
                 <FontAwesomeIcon icon="fa-brands fa-github "
               className="text-info  " />
              </a>
              <a href="https://www.linkedin.com/in/mayanksahu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info pe-4">
                 <FontAwesomeIcon icon="fa-brands fa-linkedin "
               className="text-info" />
              </a>

              <a href="https://twitter.com/mayank_html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info pe-4">
                  <FontAwesomeIcon icon="fa-brands fa-twitter "
                className="text-info" />
              </a>
              <a href="https://www.instagram.com/mayank_html/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info pe-4">
                  <FontAwesomeIcon icon="fa-brands fa-instagram "
                className="text-info" />
              </a>
            </p>
          </div>
            
          </div>
          
        </div>
       </div>
     </div>
    </>
    
     
  );
};

export default Home;
