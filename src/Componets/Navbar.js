import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';




function BasicExample() {
  



  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Puttle</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-between">

            <Nav.Link href="http://localhost:3001/pages/HomeScreen">New Records</Nav.Link>
            <Nav.Link href="http://localhost:3001/pages/ShowRecords">All Records</Nav.Link>
            <Nav.Link href="http://localhost:3001">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;