import React from 'react';
import { FaGraduationCap} from 'react-icons/fa';
import './css/Education.css';
// import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';
import { MdDateRange } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";


const Education = () => {
  return (
    <div className="container my-5">
      <div className="row position-relative" data-aos="fade-down-left">
        <div className="col-md-6">
        <div className="height"></div>  {/* Vertical line between the two columns */}
          <h3 className="text-primary"> <FaGraduationCap className="text-success"  style={{fontSize:"50px",color:"white"}}/>Education</h3>
          <div className="timeline-box shadow p-3 mb-4 rounded">
            <div className="timeline">
              <div className="timeline-item mb-4">
                <div className="circle-dot"></div>
                <h6 className="timeline-date text-white my-3">
                <MdDateRange className='fs-2 animateIcon'/>
                  <i></i>2020-2024
                </h6>
                <h4 className="timeline-title text-primary">
                  <FaGraduationCap className="text-success" />
                  <span className='text-primar'>Bachelor in Computer Science And Engineering</span>
                </h4>
                <p className="timeline-text y">
                  I completed my bachelor's degree from Paavai Engineering College in 2024, Autonomous, Namakkal, with a <span className='text-primary fs-5' style={{fontWeight:"1000px"}}> 8.0 CGPA.</span>
                </p>
              </div>
              <hr  />
              {/* Add more timeline items as needed */}
              <div className="timeline-item mb-4">
                <div className="circle-dot"></div>
                <h6 className="timeline-date my-3">
                <MdDateRange  className='fs-3 animateIcon'/>  
                  <i></i>2018-2020
                </h6>
                <h4 className="timeline-title text-primary">
                  <FaGraduationCap className="text-success" /> 
                  <span>E.M Hr.Sec.School</span>
                </h4>
                <p className="timeline-text">
                  Completed HSC in 2020 from E.M, Panpoli, Tenkasi.
                </p>
              </div>

              <hr />

              {/* Education Item 3 */}
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h6 className="timeline-date my-3">
                <MdDateRange  className='fs-3 animateIcon'/>
                  <i></i>2017-2018
                </h6>
                <h4 className="timeline-title text-primary">
                  <FaGraduationCap className="text-success" />
                  <span>E.M Hr.Sec.School</span>
                </h4>
                <p className="timeline-text ">
                  Completed SSLC in 2018 from E.M Hr.Sec.School, Panpoli, Tenkasi.
                </p>
              </div>
          </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="col-md-6">
          <h3 className="text-primary">
          <TbCertificate className='text-success'style={{fontSize:"50px"}}/> Certifications
          </h3>
          <div className="timeline-box shadow p-3 mb-4 rounded">
            <div className="timeline">
            <div className="timeline-item mb-4">
                <div className="circle-dot"></div>
                <h6 className="timeline-date">
                <MdDateRange  className='fs-3 animateIcon'/>
                  <i></i>June 2024 - December 2024
                </h6>
                <h4 className="timeline-title text-primary mt-4">
               
                <TbCertificate className='text-success'style={{fontSize:"30px"}}/><span>Python Fullstack development Course</span>
                </h4>
                <p className="timeline-text">
                  Awarded a certificate of achievement for completing.
                </p>
                 <ul className="list-group-item a-ul">
                              <li className="list-group-item d-flex align-items-center fs-5 text-white">
                                <MdOutlineStarBorderPurple500 className="text-warning me-2" />
                               Vetri Technology Solutions
                              </li>                     
                            </ul>

                <h5 className="certi-sno text-primary  verification" style={{fontWeight:"700"}}>
                  Verification Certificate ID: <span className='text-white'>65R5107DCv0pdy3L46</span>
                </h5>
              </div>
              <hr />
              <div className="timeline-item mb-4">
                <div className="circle-dot"></div>
                <h6 className="timeline-date">
                <MdDateRange  className='fs-3 animateIcon'/>
                  <i></i>Nov 2023
                </h6>
                <h4 className="timeline-title text-primary mt-4">
                <TbCertificate className='text-success 'style={{fontSize:"30px"}}/>
                  <span>GUVI (Modern HTML and CSS)</span>
                </h4>
                <p className="timeline-text">
                  Awarded a certificate of achievement for completing Modern HTML and CSS at GUVI.
                </p>
                <h5 className="certi-sno text-primary verification">
                  Verification Certificate ID: <span className='text-white'>65R5107DCv0pdy3L46</span>
                </h5>
              </div>
              <hr />

              <div className="timeline-item mb-4">
                <div className="circle-dot"></div>
                <h6 className="timeline-date">
                <MdDateRange  className='fs-3 animateIcon'/>
                  <i></i>Nov 2022
                </h6>
                <h4 className="timeline-title text-primary mt-4">
                <TbCertificate className='text-success'style={{fontSize:"30px"}}/>
                  <span>Red Hat Certified System Administrator</span>
                </h4>
                <p className="timeline-text">
                  Successfully completed the Red Hat Certified System Administrator course.
                </p>
                <h5 className="certi-sno text-primary verification">
                  Verification Certificate ID: <span className='text-white'>S.NO:2022/ADV/12374</span>
                </h5>
              </div>
              {/* Add more certification items as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;