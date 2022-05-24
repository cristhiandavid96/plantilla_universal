import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom"


const MainNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/about">About</Link>
                        <Link className='nav-link' to="/settings">Settings</Link>
                    </Nav>
                </Container>
            </Navbar>            
        </div>
    );
}

export default MainNavbar;
