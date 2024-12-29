import React from 'react';
import myphoto from '../components/assests/images/myphoto.png';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';
import './css/About.css';
import fullstack from '../components/assests/images/dev.png';

const About = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "30px" }}>
        {/* Left Column (Text Content) */}
        <div className="col-12 col-md-8 col-sm-6" style={{ marginTop: "60px" }}>
          <div className="devlop my-4">
            <div className="d-flex flex-column flex-sm-row align-items-center">
              <h1 className="text-white fs-1" style={{ fontWeight: 800 }}>
                Hi, I'm Suresh
              </h1>
              <img
                className="text-success"
                src={fullstack}
                alt="Fullstack Icon"
                style={{ width: "80px", height: "60px", marginLeft: "20px" }}
              />
            </div>
            <h2 className="my-4 fs-4 animate-title text-center text-sm-start">
              Python Fullstack Developer
            </h2>

            <ul className="list-group-item a-ul">
              <li className="list-group-item d-flex align-items-center fs-5 text-primary">
                <MdOutlineStarBorderPurple500 className="text-warning me-2" />
                I am a passionate Python Fullstack Developer.
              </li>
              <li className="list-group-item d-flex align-items-center fs-5 text-white">
                <FaCheckCircle className="text-success me-2" />
                Successfully completed the Python Fullstack Development course.
              </li>
              <li className="list-group-item d-flex align-items-center fs-5 text-primary">
                <MdOutlineStarBorderPurple500 className="text-warning me-2" />
                Gained hands-on experience in product development.
              </li>
              <li className="list-group-item d-flex align-items-center fs-5 text-white">
                <FaCheckCircle className="text-success me-2" />
                Developed 10+ clone websites to enhance my skills.
              </li>
              <li className="list-group-item d-flex align-items-center fs-5 text-primary">
                <MdOutlineStarBorderPurple500 className="text-warning me-2" />
                My passion lies in coding and development.
              </li>
            </ul>

         
          </div>
        </div>

        {/* Right Column (Profile Photo) */}
        <div className="col-12 col-md-4 col-sm-6 my-4">
          <img
            src={myphoto}
            alt="Profile of Suresh"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              maxWidth: "300px",
              margin: "0 auto",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
