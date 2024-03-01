import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Nav from 'react-bootstrap/Nav';

import Home from "./Home";
import About from "./About.js";
import Education from "./Education";
import Contact from "./Contact";

function App() {
  return (
    <section className="App-header" > 
      <div>
        <Router>
          <Navbar style={{ backgroundColor: 'transparent' }} data-bs-theme="light" className="fixed-top custom-navbar">
            <Container>
              <Navbar.Brand href="/home" className="custom-brand"></Navbar.Brand>
              <Nav className="justify-content-center">
                <Nav.Link as={Link} to={"/home"} className="text-decoration-none text-white custom-link">Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"} className="text-decoration-none text-white custom-link">About</Nav.Link>
                <Nav.Link as={Link} to={"/education"} className="text-decoration-none text-white custom-link">Education</Nav.Link>
                <Nav.Link as={Link} to={"/contact"} className="text-decoration-none text-white custom-link">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Container className="mt-5">
            <Row>
              <Col md={12}>
                <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />}/>
                  <Route path="/education" element={<Education />}/>
                  <Route path="/contact" element={<Contact />}/>
                </Routes>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    </section>
  );
}

export default App;
