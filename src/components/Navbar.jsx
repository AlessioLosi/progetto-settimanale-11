import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Button, Row, Col, } from 'react-bootstrap';
import Search from './Search';


function ColorSchemesExample() {
  return (
    <>
    <Row><Col xs={2} lg={3} >
 <Navbar bg="dark" variant="dark" expand="md" className="flex-column p-3" style={{ height: '100vh', position: 'fixed', left: 0, top: 0, width: '250px' }}>

  
          <Nav className="flex-column justify-content-start">
          <Navbar.Brand href="index.html">
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" alt="Spotify Logo" className="logospotify" />
        </Navbar.Brand>
            <Nav.Link href="#" className="d-flex align-items-center">
              <i className="bi bi-house-door-fill"></i>&nbsp; Home
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center">
              <i className="bi bi-book-fill"></i>&nbsp; Your Library
            </Nav.Link>
           <Search/>
          </Nav>

        <div className="mt-auto">
          <Button variant="success" className="m-2">Sign Up</Button>
          <Button variant="outline-light" className="m-2">Login</Button>
          <div>
            <a href="#" className="text-light">Cookie Policy</a> | 
            <a href="#" className="text-light"> Privacy</a>
          </div>
        </div>
      </Navbar></Col></Row>
    </>
  );
}

export default ColorSchemesExample;