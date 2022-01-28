import React from "react";
import Skillcard from "./SkillCard";

//what I do
const Skills = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="text-center my-5">What I do</h1>
      </div>
      <div className="row">
        <Skillcard />
        <Skillcard
          title="Backend"
          body="I'm currently working on MERN stack. I love to build RESTful APIs and build scalable backend systems."
         skills={["NodeJS", "ExpressJS", "MongoDB", "Mongoose", "JavaScript","Firebase", "mySQL"]}
        />
        <Skillcard
            title="Other"
            body="I'm also getting my hands into problem solving and algorithm implementation. I'm also familiar with Version Control System."
            skills={["C++","JavaScript", "Python", "Git", "GitHub","Vs Code"]}
            />
        
      </div>
    </div>
  );
};

export default Skills;
