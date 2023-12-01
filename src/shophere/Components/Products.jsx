import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Products.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("https://sathishmadesh.github.io/Products/products.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch();
  }, []);

  return (
    <div>
      <div className="prod-cont">
        {products.length > 0 ? (
          <div>
            <Container>
              <Row className="gy-5">
                {products.map((product, index) => (
                  <Col xs={6} md={4} lg={3} key={index}>
                    <Card className="cards h-100">
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body className="c-body">
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>Price: ${product.price}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        ) : (
          <div>No Data</div>
        )}
      </div>
    </div>
  );
};

export default Products;