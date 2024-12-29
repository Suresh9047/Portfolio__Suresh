import React from "react";
// import "./Projects.css"; // Add CSS for styling
import rushikImage from '../components/assests/images/rushik.png';
import ReactImage from '../components/assests/images/ReactC.png'
import Shopclues from '../components/assests/images/Shopclues.png'
import Courses from '../components/assests/images/Courses.png'
import { FaCheckCircle } from 'react-icons/fa';
import { GrProjects } from "react-icons/gr";
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';
// import { MdOutlineStarBorderPurple500 } from 'react-icons/md';


const projects = [
  {
    title: "E-Commerce Website(Rushik Organic)",
    description: "A platform enabling users to add products to a cart, search for items, and checkout efficiently.",
    techStack: "HTML, CSS, JavaScript, JSON",
    demoLink: "https://suresh9047.github.io/webecom/",
    repoLink: "https://github.com/Suresh9047/webecom.git",
    tech: "Html 5",
    tech2: "Css",
    tech3: "JavaScript",
    tech4: "Json",
    image: rushikImage,
    icon: <FaCheckCircle className="text-success" />,
    icon1: <FaCheckCircle className="text-success" />
  },
  {
    title: "ShopClues - Clone(Full-Stack)",
    description: "A full-stack e-commerce platform with user authentication and a dynamic product catalog. All Category and Products Cart details store in SQL databases",
    demoLink: "https://suresh9047.github.io/Shpclues_Clone/",
    image: Shopclues,
    tech: "Django - Python",
    tech2: "Html 5,Css,JavaScript",
    tech3: "SQL,CRM",
    tech4: "Bootsrap",
    repoLink: "https://github.com/Suresh9047/Shpclues_Clone.git",
    icon: <FaCheckCircle className="text-success" />,
    icon1: <FaCheckCircle className="text-success" />,
  fullstack: "This Project code is attached in the GitHub repository. You can test the live demo by downloading the repo code and running it locally."
  },
  {
    title: "React E-Commerce",
    description: "A platform enabling users to add products to a cart, and checkout efficiently.This website routing  Single Page Application",
    techStack: "React, CSS, Bootstrap",
    tech: "React.Js",
    tech2: "SPA",
    tech3: "Json",
    image: ReactImage,
    demoLink: " https://suresh9047.github.io/React_come/",
    repoLink: "https://github.com/Suresh9047/React_come.git",
    icon: <FaCheckCircle className="text-success" />,
    icon1: <FaCheckCircle className="text-success" />
  },
  {
    title: "Course Details Website",
    description: "A dynamic platform for showcasing and managing course information with user-friendly interfaces, built using React and Bootstrap. It features responsive design and seamless navigation for both desktop and mobile users.",
    techStack: "React, Bootstrap",
    demoLink: "https://suresh9047.github.io/Courses/",
    tech: "React",
    tech2: "Bootstrap",
    repoLink: "https://github.com/Suresh9047/Courses.git",
    icon: <FaCheckCircle className="text-success" />,
    icon1: <FaCheckCircle className="text-success" />,
    image: Courses
}

];

const Projects = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-white project-titile" style={{fontSize:"32px"}}> <GrProjects className="text-success" style={{fontSize:"50px"}}/>My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 col-sm-8 col-lg-4 mb-4">
            <div className="card project-card shadow-sm">
              <div className="card-body">
                <img src={project.image} className="img-fluid responsive-img"alt="web" />
                <h5 className="card-title text-primary my-3">{project.title}</h5>
                <p className="card-text"> <MdOutlineStarBorderPurple500 className="text-warning"/>{project.description}</p>
                {project.fullstack && (
                  <p className="text-danger" style={{fontSize:"15px",fontWeight:'1000px'}}> 
                    {project.icon}
                    {project.fullstack}
                  </p>
                )}
                <h1 className="fs-5 text-primary">Technologies Used:</h1>
                <ul className="project-ul">
                  {project.tech && (
                    <li className="list-group-item d-flex align-items-center fs-7 text-primary">
                      {project.icon}
                      {project.tech}
                    </li>
                  )}
                  {project.tech2 && (
                    <li className="list-group-item d-flex align-items-center fs-7 text-primary">
                      {project.icon1}
                      {project.tech2}
                    </li>
                  )}
                  {project.tech3 && (
                    <li className="list-group-item d-flex align-items-center fs-7 text-primary">
                      {project.icon}
                      {project.tech3}
                    </li>
                  )}
                  {project.tech4 && (
                    <li className="list-group-item d-flex align-items-center fs-7 text-primary">
                      {project.icon1}
                      {project.tech4}
                    </li>
                  )}
                </ul>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm me-2"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;