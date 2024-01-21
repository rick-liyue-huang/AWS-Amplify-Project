import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const SiteNav = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>My App</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
              <Nav.Link href='/register'>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
