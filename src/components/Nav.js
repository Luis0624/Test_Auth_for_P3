import React, { Component } from 'react';
import { Navbar }from 'react-bootstrap';

class Nav extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
             <Navbar.Brand href="#home">Vino VR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Feature Wine</Nav.Link>
            <Nav.Link href="#link">My Favorite</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      
    </Navbar>
        )

    }
    
}

export default Nav;


