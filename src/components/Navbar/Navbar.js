import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../ducks/reducer';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // logout = async () => {
  //   this.props.logoutUser();
  //   await this.props.history.push('/');
  // };

  render() {
    return (
      <Navbar bg='light' expand='md' fixed='top'>
        <Link to='/'>
          <Navbar.Brand>DevConnect</Navbar.Brand>
        </Link>
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
            {/* <Nav.Link onClick={() => this.logout()}>Logout</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
