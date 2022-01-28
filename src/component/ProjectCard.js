import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import ProjectImage from "../assets/images/about.png";

const ProjectCard = ({
  title = "E- Commerce Website",
  description = "A shopping website which displays a list of t-shirt for the user to buy. Implement CRUD operations, authentication, stripe payment gateway integration, and basic UI. ",
  stack = ["React", "Node", "Express", "MongoDB"],
  github = "https://github.com/Mayank8085/TshirtFrontend",
  website = "https://tshritstore.netlify.app/",
}) => {
  return (
    <div className="col-12 col-md-6 my-4 px-5">
      <div className="card bg-dark">
        {/* <img src={ProjectImage} className="card-img-top h-25 " alt="..." /> */}

        <div className="card-body text-start">
          <div className="row ">
            <div className="col-md-10 col-12">
              <h3 className="card-title  bolder ">{title}</h3>
            </div>
            <div className="col-md-1 col-2 text-end ">
              <a href={website} target="_blank" rel="noopener noreferrer">
                <h3 className="card-title  bolder ">
                <FontAwesomeIcon icon="fa-solid fa-globe" 
                className="text-info"
                />
                </h3>
              </a>
            </div>
            <div className="col-md-1 col-2">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <h3 className="card-title  bolder ">
                  <FontAwesomeIcon
                    icon="fa-brands fa-github "
                    className="text-white me-4"
                  />
                </h3>
              </a>
            </div>

          </div>

          <p className="card-text text-light mt-4 fs-6">{description}</p>
          <p className="card-text mt-4">
            {stack.map((item, index) => {
              return (
                <span key={index} className="badge fs-6 mr-2">
                  #{item}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
