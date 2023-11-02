import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/">User Registration</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="mx-2" to="/">Home</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
