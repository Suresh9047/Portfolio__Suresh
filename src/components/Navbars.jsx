import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Homenav from '../components/assests/images/homes.png';
import { FaBriefcase, FaTools, FaUser, FaCertificate } from 'react-icons/fa';

function Navbars() {
  return (
    <>
      <Navbar bg="" variant="primary" sticky="top" expand="lg" className="Navbar">
        <Container>
          <Nav.Link href='about'>
            <img
              className="nav-icon"
              style={{ width: '180px', height: '80px', objectFit: 'contain', marginRight: '15px' }}
              src={Homenav}
              alt="Home"
            />
          </Nav.Link>
          <Nav.Link href='#about'>
            <h1 className="fs-1 my-0 av-icon text-primary" style={{ fontWeight: '1000' }}>
              Suresh
            </h1>
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#projects" className="nav-item text-white fs-5 d-flex align-items-center me-4">
                <FaBriefcase className="animateIcon" style={{ marginRight: '8px', fontSize: '1.5rem' }} />
                <span>Projects</span>
              </Nav.Link>
              <Nav.Link href="#image-slider" className="nav-item text-white fs-5 d-flex align-items-center me-4">
                <FaTools className="animateIcon" style={{ marginRight: '8px', fontSize: '1.5rem' }} />
                <span>Skills</span>
              </Nav.Link>
              <Nav.Link href="#about" className="nav-item text-white fs-5 d-flex align-items-center me-4">
                <FaUser className="animateIcon" style={{ marginRight: '8px', fontSize: '1.5rem' }} />
                <span>About</span>
              </Nav.Link>
              <Nav.Link href="#education" className="nav-item text-white fs-5 d-flex align-items-center me-4">
                <FaCertificate className="animateIcon" style={{ marginRight: '8px', fontSize: '1.5rem' }} />
                <span>Certificates</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
