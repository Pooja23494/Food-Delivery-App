import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/AboutStyle.css";

const About = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="about_banner">
        <Container>
          <div className="about_banner_content text-center">
            <h1>ABOUT US</h1>
            <p>
              Serving delicious food made with passion, quality ingredients, and
              unforgettable flavors.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="about_story">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about_image">
                <img
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800"
                  alt="Restaurant"
                  className="img-fluid rounded"
                />
              </div>
            </Col>

            <Col lg={6}>
              <div className="about_content">
                <h5>Welcome To Our Restaurant</h5>

                <h2>
                  Delivering Happiness
                  <span> One Meal At A Time</span>
                </h2>

                <p>
                  We believe food is more than just a meal—it's an experience.
                  That's why we carefully prepare every dish using fresh
                  ingredients and authentic recipes.
                </p>

                <p>
                  Whether you're craving juicy burgers, crispy fries, refreshing
                  drinks, or delicious desserts, we've got something special
                  waiting for you.
                </p>

                <button className="order_now btn_red">Order Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features */}
      <section className="about_features">
        <Container>
          <div className="text-center mb-5">
            <h2>WHY CHOOSE US</h2>
            <p>
              We are committed to providing quality food and exceptional
              service.
            </p>
          </div>

          <Row className="feature g-4">
            <Col lg={4} md={4} sm={12}>
              <div className="feature_card">
                <div className="feature_icon">🚚</div>
                <h4>FAST DELIVERY</h4>
                <p>Fresh and hot meals delivered straight to your doorstep.</p>
              </div>
            </Col>

            <Col lg={4} md={4} sm={12}>
              <div className="feature_card">
                <div className="feature_icon">🍔</div>
                <h4>FRESH FOOD</h4>
                <p>Premium ingredients and authentic recipes in every meal.</p>
              </div>
            </Col>

            <Col lg={4} md={4} sm={12}>
              <div className="feature_card">
                <div className="feature_icon">⭐</div>
                <h4>BEST QUALITY</h4>
                <p>Trusted by thousands of satisfied customers every day.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Counter Section */}
      <section className="about_counter">
        <Container>
          <Row className="text-center">
            <Col md={3} sm={6}>
              <div className="counter_box">
                <h2>10K+</h2>
                <p>Happy Customers</p>
              </div>
            </Col>

            <Col md={3} sm={6}>
              <div className="counter_box">
                <h2>500+</h2>
                <p>Daily Orders</p>
              </div>
            </Col>

            <Col md={3} sm={6}>
              <div className="counter_box">
                <h2>100+</h2>
                <p>Menu Items</p>
              </div>
            </Col>

            <Col md={3} sm={6}>
              <div className="counter_box">
                <h2>50+</h2>
                <p>Restaurant Partners</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="about_cta">
        <Container>
          <div className="text-center">
            <h2>READY TO TASTE THE DIFFERENCE?</h2>
            <p>
              Order your favorite meal today and enjoy the best food experience.
            </p>

            <button className="btn order_now btn_yellow">Order Online</button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
