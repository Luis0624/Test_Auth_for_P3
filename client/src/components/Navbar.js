import React from 'react'; 
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Logo from '../images/logo192.png'
import '../styles/Navbar.css'

function WineBar() {

    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">     
  <img
        alt="VinoVR logo"
        src={Logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      VinoVR
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto" >
      <Nav.Link href="/featured">Featured Wines</Nav.Link>
      <Nav.Link href="/favorites">My Favorites</Nav.Link>
      <NavDropdown title="About" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://github.com/raposogiselle" target="_blank">Giselle</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/graceyangyxt" target="_blank">Grace</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/Luis0624" target="_blank">Luis</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/seanpweber" target="_blank">Sean</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://github.com/raposogiselle/React-vinoVR" target="_blank">Project Github</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav className="ml-auto">
        <>
        <Button variant="outline-success" size="sm" className="LoginButton" href="/signin" >
            Login
        </Button>
        
        <Button variant="outline-primary" size="sm" href="/signup">
            Sign Up
        </Button>
        </>
      {/* <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>

    )};

export default WineBar;
