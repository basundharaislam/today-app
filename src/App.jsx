import Test from "./Test";
import Counter from "./Counter";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Alert } from "react-bootstrap";
import { Routes, Route } from "react-router";
import About from "./About";
import Home from "./Home";
import { Link } from "react-router";
function App() {
  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1>Hello Basundhara!!!</h1>
        <br />
        <Test />
        <br />
        <Counter />
        <br />
        <Button variant="light">OK</Button>
        <Button variant="success">OK</Button>
        <Button variant="dark">OK</Button>
        <Alert variant="info">HI BE CAREFUL!!!</Alert>
        <br />
        <br />

        <Link to="/bari">Click for Home</Link>
        <br />
        <Link to="/aboutpage">Click for About</Link>
        <Routes>
          <Route path="/bari" element={<Home />} />
          <Route path="/aboutpage" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
