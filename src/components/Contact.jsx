import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './css/Contact.css'

function Contact() {
  return (
    <section className="contact-section py-5">
      <Container>
        <h2
          className="text-center fs-2 text-primary mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        > 
          Get in Touch
        </h2>
        <Row>
          <Col md={6} >
            <p className="text-primary" style={{fontWeight:"800"}}>
              Feel free to reach out! I'm always open to discussing new projects
              or opportunities.
            </p>
            <ul className="list-unstyled text-white">
              <li>
                <strong>Email:</strong> suresh904753@gmail.com
              </li>
              <li>
                <strong>Phone:</strong>+91 6382857859
              </li>
              <li>
                <strong>Location:</strong>10/1 Punkudi Madan Kovil Street Panpoli,Tenkasi,TamilNadu
              </li>
            </ul>
          </Col>
          <Col md={6} >
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="text-primary">Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="text-primary">Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className="text-primary">Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
