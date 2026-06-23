import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/MenuStyle.css";

// Burgers
import Burger1 from "../assets/menu/burger-11.jpg";
import Burger2 from "../assets/menu/burger-12.jpg";
import Burger3 from "../assets/menu/burger-13.jpg";
import Burger4 from "../assets/menu/burger-14.jpg";

// Pizza
import Pizza1 from "../assets/menu/pizza-1.jfif";
import Pizza2 from "../assets/menu/pizza-2.jfif";

// Drinks
import Drink1 from "../assets/menu/drink-1.jpg";
import Drink2 from "../assets/menu/drink-2.jpg";

// Desserts
import Dessert1 from "../assets/menu/dessert-1.jpg";
import Dessert2 from "../assets/menu/dessert-2.jpg";

const menuData = [
  // Burgers
  {
    id: 1,
    img: Burger1,
    title: "Classic Burger",
    price: "$12.99",
    category: "Burger",
  },
  {
    id: 2,
    img: Burger2,
    title: "Cheese Burger",
    price: "$14.99",
    category: "Burger",
  },
  {
    id: 3,
    img: Burger3,
    title: "Chicken Burger",
    price: "$15.99",
    category: "Burger",
  },
  {
    id: 4,
    img: Burger4,
    title: "Double Patty",
    price: "$18.99",
    category: "Burger",
  },

  // Pizza
  {
    id: 5,
    img: Pizza1,
    title: "Margherita Pizza",
    price: "$20.99",
    category: "Pizza",
  },
  {
    id: 6,
    img: Pizza2,
    title: "Pepperoni Pizza",
    price: "$22.99",
    category: "Pizza",
  },

  // Drinks
  {
    id: 7,
    img: Drink1,
    title: "Cold Coffee",
    price: "$5.99",
    category: "Drinks",
  },
  {
    id: 8,
    img: Drink2,
    title: "Orange Juice",
    price: "$4.99",
    category: "Drinks",
  },

  // Desserts
  {
    id: 9,
    img: Dessert1,
    title: "Chocolate Cake",
    price: "$8.99",
    category: "Desserts",
  },
  {
    id: 10,
    img: Dessert2,
    title: "Vanilla Ice Cream",
    price: "$6.99",
    category: "Desserts",
  },
];

const Menu = () => {
  const [category, setCategory] = useState("All");

  const filteredItems =
    category === "All"
      ? menuData
      : menuData.filter((item) => item.category === category);

  return (
    <>
      {/* Banner */}
      <section className="menu_banner">
        <Container>
          <div className="menu_banner_content text-center">
            <h1>OUR MENU</h1>
            <p>Explore our delicious food prepared with fresh ingredients.</p>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="menu_category">
        <Container>
          <div className="text-center">
            <h2>FOOD CATEGORIES</h2>

            <div className="category_btns">
              <button
                className={category === "All" ? "active" : ""}
                onClick={() => setCategory("All")}
              >
                ALL
              </button>

              <button
                className={category === "Burger" ? "active" : ""}
                onClick={() => setCategory("Burger")}
              >
                BURGERS
              </button>

              <button
                className={category === "Pizza" ? "active" : ""}
                onClick={() => setCategory("Pizza")}
              >
                PIZZA
              </button>

              <button
                className={category === "Drinks" ? "active" : ""}
                onClick={() => setCategory("Drinks")}
              >
                DRINKS
              </button>

              <button
                className={category === "Desserts" ? "active" : ""}
                onClick={() => setCategory("Desserts")}
              >
                DESSERTS
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Menu Items */}
      <section className="menu_page_section">
        <Container>
          <Row className="g-4">
            {filteredItems.map((item) => (
              <Col
                lg={4}
                md={6}
                sm={6}
                xs={12}
                className="d-flex"
                key={item.id}
              >
                <Card className="menu_card border-0 w-100">
                  <div className="menu_img_wrapper">
                    <Card.Img variant="top" src={item.img} />
                  </div>

                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <Card.Title>{item.title}</Card.Title>

                      <div className="menu_price">
                        <h5>{item.price}</h5>
                      </div>
                    </div>

                    <Card.Text>
                      Fresh ingredients and premium quality taste in every bite.
                    </Card.Text>

                    <button className="order_now btn_red">Order Now</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Offer */}
      <section className="menu_offer">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2>20% OFF</h2>
              <h4>Special Weekend Offer</h4>

              <p>
                Get amazing discounts on your favorite food items this weekend.
              </p>

              <button className="order_now">Order Today</button>
            </Col>

            <Col lg={6}>
              <img src={Burger4} alt="offer" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Menu;
