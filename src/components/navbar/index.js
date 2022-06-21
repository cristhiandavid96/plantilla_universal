import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom"


const MainNavbar = ({children}) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/home">Home</Link>
                        <Link className='nav-link' to="/about">About</Link>
                        <Link className='nav-link' to="/settings">Settings</Link>
                    </Nav>
                </Container>
            </Navbar>    
            {children}        
        </>
    );
}

export default MainNavbar;
