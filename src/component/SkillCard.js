import React from "react";

const Skillcard = ({
  title = "Frontend",
  body = "I'm passionate about building creative, beautiful responsive and functional websites. I'm currently working on ReactJS ",
  skills = ["HTML", "CSS", "JavaScript", "SASS","Bootstrap", "React"],
}) => {
  return (
    <div className="col-12 col-md-4 mt-4">
      <div className="card">
        <div className="card-body text-center bg-dark">
          <h5 className="card-title mb-3">{title}</h5>
          <p className="card-text mb-3 ">{body}</p>
          {skills.map((skill) => (
            <span className="badge badge-pill badge-primary bold fs-6 bg-info m-2 ">
                {skill}
            </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skillcard;
