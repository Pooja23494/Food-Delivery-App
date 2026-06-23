import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/BlogStyle.css";

import Blog1 from "../assets/blog/blog-1.jfif";
import Blog2 from "../assets/blog/blog-3.jfif";
import Blog3 from "../assets/blog/blog-2.jfif";
import Blog4 from "../assets/blog/blog-4.jfif";

const blogs = [
  {
    id: 1,
    image: Blog1,
    date: "10 June 2026",
    title: "Top 5 Burgers You Must Try This Summer",
    desc: "Discover our most loved burgers packed with delicious flavors and fresh ingredients.",
  },
  {
    id: 2,
    image: Blog2,
    date: "15 June 2026",
    title: "Why Fresh Ingredients Matter",
    desc: "Learn how quality ingredients improve taste, nutrition, and customer satisfaction.",
  },
  {
    id: 3,
    image: Blog3,
    date: "18 June 2026",
    title: "Behind The Scenes In Our Kitchen",
    desc: "Take a look at how our chefs prepare fresh meals every day.",
  },
  {
    id: 4,
    image: Blog4,
    date: "20 June 2026",
    title: "Best Food Pairings For Burgers",
    desc: "Explore delicious combinations of burgers, fries, desserts, and drinks.",
  },
];

const Blog = () => {
  return (
    <>
      {/* Banner */}
      <section className="blog_banner">
        <Container>
          <div className="blog_banner_content text-center">
            <h1>OUR BLOG</h1>
            <p>Latest Food Stories, Tips & Updates</p>
          </div>
        </Container>
      </section>

      {/* Featured Blog */}
      <section className="featured_blog">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="featured_img d-flex justify-content-center">
              <img src={Blog1} alt="featured" className="img-fluid rounded" />
            </Col>

            <Col lg={6}>
              <div className="featured_content">
                <span>Featured Article</span>

                <h2>Discover The Secret Behind Our Signature Burgers</h2>

                <p>
                  Every burger is crafted using premium ingredients, handcrafted
                  sauces, and fresh vegetables to deliver an unforgettable taste
                  experience.
                </p>

                <button className="order_now btn_red">Read More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog Cards */}
      <section className="blog_cards">
        <Container>
          <div className="text-center mb-5">
            <h2>LATEST ARTICLES</h2>
          </div>

          <Row className="g-4">
            {blogs.map((blog) => (
              <Col lg={3} md={6} key={blog.id} className="d-flex">
                <Card className="blog_card w-100 border-0">
                  <div className="blog_img">
                    <Card.Img src={blog.image} />
                  </div>

                  <Card.Body>
                    <span className="blog_date">{blog.date}</span>

                    <Card.Title>{blog.title}</Card.Title>

                    <Card.Text>{blog.desc}</Card.Text>

                    <button className="read_btn">Read More</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="newsletter_section">
        <Container>
          <div className="newsletter_box text-center">
            <h2>Subscribe To Our Newsletter</h2>

            <p>
              Get updates on special offers, food blogs, and new menu launches.
            </p>

            <form className="newsletter_form">
              <input type="email" placeholder="Enter your email" />

              <button type="submit" className="order_now btn_red">
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog;
