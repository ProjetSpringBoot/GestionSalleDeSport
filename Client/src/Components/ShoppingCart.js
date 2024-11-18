import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar';

const ShoppingCart = () => {
  const [items, setItems] = useState([
    {
      image: '/shirt1.jpg',
      name: 'Cotton T-shirt',
      quantity: 1,
      price: 44.00,
    },
    {
      image: '/shirt2.jpg',
      name: 'Cotton T-shirt',
      quantity: 1,
      price: 44.00,
    },
    {
      image: '/shirt3.jpg',
      name: 'Cotton T-shirt',
      quantity: 1,
      price: 44.00,
    },
  ]);

  const handleQuantityChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = value;
    setItems(updatedItems);
  };

  const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const shipping = 5.0;

  return (
    <div>
        <Navbar/>
    <Container>
      <Row>
        <Col xs={8}>
          <h2>Shopping Cart</h2>
          {items.map((item, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Row>
                  <Col xs={3}>
                    <img src={item.image} alt={item.name} className="img-fluid" />
                  </Col>
                  <Col xs={6}>
                    <h5>{item.name}</h5>
                    <InputGroup size="sm" className="mb-3">
                      <FormControl
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                        type="number"
                        min={1}
                        max={99}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={3} className="text-right">
                    <h5>€{item.price.toFixed(2)}</h5>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col xs={4}>
          <Card>
            <Card.Body>
              <h4>Summary</h4>
              <div className="d-flex justify-content-between">
                <span>ITEMS {items.length}</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>SHIPPING</span>
                <span>€{shipping.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span>TOTAL PRICE</span>
                <span>€{(total + shipping).toFixed(2)}</span>
              </div>
              <div className="d-grid gap-2 mt-3">
                <Button variant="primary">REGISTER</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ShoppingCart;