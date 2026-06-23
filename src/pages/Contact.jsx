import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "../styles/ContactStyle.css";

const Contact = () => {
  return (
    <>
      {/* Banner */}

      <section className="contact_banner">
        <Container>
          <div className="contact_banner_content text-center">
            <h1>CONTACT US</h1>
            <p>We'd Love To Hear From You</p>
          </div>
        </Container>
      </section>

      {/* Contact Info */}

      <section className="contact_info">
        <Container>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="info_card">
                <i className="bi bi-geo-alt-fill"></i>
                <h4>Our Location</h4>
                <p>5505 Waterford District</p>
                <p>Dr, Miami, FL 33126</p>
                <p>United States</p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="info_card">
                <i className="bi bi-telephone-fill"></i>
                <h4>Call Us</h4>
                <p>+1 234 567 890</p>
              </div>
            </Col>

            <Col lg={4} md={12}>
              <div className="info_card">
                <i className="bi bi-envelope-fill"></i>
                <h4>Email Us</h4>
                <p>info@burgerhouse.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form */}

      <section className="contact_form_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="contact_text">
                <h2>GET IN TOUCH</h2>

                <p>
                  Have questions about our menu, delivery, or special offers?
                  Send us a message and we'll get back to you as soon as
                  possible.
                </p>

                <div className="opening_hours">
                  <h4>Opening Hours</h4>

                  <ul>
                    <li>Monday - Friday : 9:00 AM - 10:00 PM</li>
                    <li>Saturday : 10:00 AM - 8:30 PM</li>
                    <li>Sunday : 12:00 PM - 5:00 PM</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="contact_form">
                <Form>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    className="mb-5 mb-lg-3"
                  />

                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    className="mb-5 mb-lg-3"
                  />

                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    className="mb-5 mb-lg-3"
                  />

                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                    className="mb-5 mb-lg-3"
                  />

                  <button type="submit" className="order_now btn_red mt-5 mt-lg-0">
                    Send Message
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map */}

      <section className="map_section">
        <Container fluid className="p-0">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb="
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Container>
      </section>
    </>
  );
};

export default Contact;
