// Group 4

import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";

function OffcanvasExample() {
  return (
    <Container>
      <Row>
        {["sm"].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3 our_nav">
            <Container fluid>
              <Navbar.Brand href="#" id="logo">
                Smart<span id="buy">Solution</span>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    SmartBuy
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                    <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                    <Nav.Link href="/services">Our Services</Nav.Link>
                    <Nav.Link href="/teams">Our Team</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2 search_form"
                      aria-label="Search"
                    />
                    <Button variant="" id="search_button">
                      Search
                    </Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </Row>
    </Container>
  );
}

export default OffcanvasExample;
