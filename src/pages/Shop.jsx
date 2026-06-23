import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/ShopStyle.css";

import Burger1 from "../assets/shop/burger-1.jpg";
import Burger2 from "../assets/shop/burger-2.jpg";
import Burger3 from "../assets/shop/burger-3.jpg";
import Burger4 from "../assets/shop/burger-4.jfif";
import Burger5 from "../assets/shop/burger-5.jfif";
import Burger6 from "../assets/shop/burger-6.jfif";

import AppStore from "../assets/shop/appstore.png";
import GooglePlay from "../assets/shop/googleplay.png";

const combos = [
  {
    id: 1,
    title: "Family Combo",
    desc: "2 Burgers + Fries + 2 Drinks",
    price: "$24.99",
  },
  {
    id: 2,
    title: "Mega Combo",
    desc: "Double Burger + Fries + Coke",
    price: "$19.99",
  },
  {
    id: 3,
    title: "Kids Combo",
    desc: "Mini Burger + Juice",
    price: "$12.99",
  },
];

const products = [
  {
    id: 1,
    image: Burger1,
    title: "Classic Burger",
    price: "$12.99",
  },
  {
    id: 2,
    image: Burger2,
    title: "Cheese Burger",
    price: "$14.99",
  },
  {
    id: 3,
    image: Burger3,
    title: "Chicken Burger",
    price: "$15.99",
  },
  {
    id: 4,
    image: Burger4,
    title: "Double Patty Burger",
    price: "$18.99",
  },
];

const Shop = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="shop_banner">
        <Container>
          <div className="shop_banner_content text-center">
            <h1>SHOP NOW</h1>
            <p>Fresh Burgers Delivered To Your Doorstep</p>
          </div>
        </Container>
      </section>

      {/* Combo Deals */}
      <section className="combo_section">
        <Container>
          <div className="text-center mb-5">
            <h2>COMBO DEALS</h2>
            <p>Enjoy delicious meals with amazing combo offers.</p>
          </div>

          <Row className="g-4">
            {combos.map((combo) => (
              <Col lg={4} md={6} key={combo.id}>
                <div className="combo_card">
                  <h4>{combo.title}</h4>
                  <p>{combo.desc}</p>
                  <h3>{combo.price}</h3>
                  <button className="order_now btn_red">Order Now</button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="featured_products">
        <Container>
          <div className="text-center mb-5">
            <h2>BEST SELLERS</h2>
            <p>Our most loved burgers by customers.</p>
          </div>

          <Row className="g-4 featured_card">
            {products.map((item) => (
              <Col lg={3} md={6} className="d-flex" key={item.id}>
                <Card className="shop_card w-100 border-0">
                  <div className="shop_img">
                    <Card.Img src={item.image} />
                  </div>

                  <Card.Body>
                    <h4>{item.title}</h4>

                    <div className="shop_price">{item.price}</div>

                    <button className="order_now btn_red mt-3">
                      Add To Cart
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Offer Banner */}
      <section className="shop_offer">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2>BUY 1 GET 1 FREE</h2>
              <h4>Every Tuesday Special</h4>

              <p>
                Grab your favorite burgers and enjoy our weekly special deal.
              </p>

              <button className="order_now">Shop Now</button>
            </Col>

            <Col lg={6}>
              <img src={Burger5} alt="offer" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* App Download */}
      <section className="download_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2>DOWNLOAD OUR APP</h2>

              <p>
                Order your favorite food anytime, anywhere with our mobile app.
              </p>

              <div className="app_btns">
                <img src={GooglePlay} alt="google play" />
                <img src={AppStore} alt="app store" />
              </div>
            </Col>

            <Col lg={6}>
              <img src={Burger6} alt="app" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Shop;
