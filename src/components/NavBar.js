import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NavBar.css";



class NavBar extends React.Component {
    render() {
        return (
            <Navbar expand="md" fixed="top" className="navbar-dark " >
                <Container>
                    <Navbar.Brand href="#">Shadin Hussein</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#intro">Home</Nav.Link>
                            <Nav.Link href="#about">About Me</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            {/* <Nav.Link href="#projects">Projects</Nav.Link> */}
                        </Nav>
                    
                    </Navbar.Collapse>
                </Container>
             </Navbar>

        )
        
    }
}

export default NavBar;