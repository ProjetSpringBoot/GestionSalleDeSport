import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Join = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      <h1 className="mb-4" style={{ fontSize: "2rem", fontWeight: "700", color: "#333" }}>
        Join as a Client or Coach
      </h1>
      <Row className="justify-content-center w-100">
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="border-0 shadow-lg h-100" style={{ maxWidth: "500px" }}>
            <Card.Body className="d-flex flex-column align-items-center p-4">
              <Card.Title className="text-dark mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                I'm a client, looking for a service
              </Card.Title>
              <Link to="/LoginClient" className="text-decoration-none w-100">
                <Button
                  variant="outline-dark"
                  className="w-100 d-flex justify-content-between align-items-center"
                  style={{ marginTop: "30px" }}
                >
                  Join as Client
                  <i className="fas fa-arrow-right"></i>
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="border-0 shadow-lg h-100" style={{ maxWidth: "500px" }}>
            <Card.Body className="d-flex flex-column align-items-center p-4">
              <Card.Title className="text-dark mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                I'm a Coach, looking for work
              </Card.Title>
              <Link to="/LoginCoach" className="text-decoration-none w-100">
                <Button
                  variant="outline-dark"
                  className="w-100 d-flex justify-content-between align-items-center"
                  style={{ marginTop: "30px" }}
                >
                  Join as Coach
                  <i className="fas fa-arrow-right"></i>
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
    </Container>
  );
};

export default Join;
