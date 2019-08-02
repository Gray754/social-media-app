import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg='light' expand='md' fixed='top'>
      <Navbar.Brand href='#home'>DevConnect</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarToggle' />
      <Navbar.Collapse id='navbarToggle'>
        <Nav className='ml-auto'>
          <Nav.Link>
            <Link to='/'>Home</Link>
          </Nav.Link>
          <Nav.Link>Feed</Nav.Link>
          <Nav.Link>
            <Link to='/profile'>Profile</Link>
          </Nav.Link>
          <Nav.Link>Settings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
