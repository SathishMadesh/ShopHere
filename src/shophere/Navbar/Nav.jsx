import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">ShopHere</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarText" />
      <Navbar.Collapse id="navbarText">
        <Nav className="ml-auto">
          <Form inline>
            <FormControl type="search" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
          <Nav.Link as={Link} to="/Home">Home</Nav.Link>
          <Nav.Link as={Link} to="/Products">Products</Nav.Link>
          <Nav.Link as={Link} to="/About">About Us</Nav.Link>
          <Nav.Link as={Link} to="/Cart">Cart</Nav.Link>
          <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;