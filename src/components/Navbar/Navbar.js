import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../ducks/reducer';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Navbar bg='light' expand='md' fixed='top'>
        <Navbar.Brand href='#home'>DevConnect</Navbar.Brand>
        {this.props.userSession.username ? (
          <Navbar.Toggle aria-controls='navbarToggle' />
        ) : null}
        <Navbar.Collapse id='navbarToggle'>
          <Nav className='ml-auto'>
            <Nav.Link>Feed</Nav.Link>
            <Nav.Link>
              <Link to='/profile'>Profile</Link>
            </Nav.Link>
            <Nav.Link>Settings</Nav.Link>
            <Nav.Link onClick={() => this.logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Header);
