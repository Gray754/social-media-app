import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../ducks/reducer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    if (this.props.userSession.username) {
      this.props.history.push('/login');
    }
  }

  updateInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    await this.props.loginUser(username, password);
    this.props.history.push('/profile');
  };

  render() {
    // console.log(this.state.username, this.state.password);
    return (
      <Container>
        <Form onSubmit={this.login}>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              placeholder='Username'
              name='username'
              onChange={this.updateInput}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              placeholder='Password'
              name='password'
              onChange={this.updateInput}
            />
          </Form.Group>
          <Button type='submit' block>
            Login
          </Button>
          <Button
            block
            onClick={() => {
              this.props.history.push('/');
            }}
          >
            Back
          </Button>
        </Form>
        {this.props.loginErr ? (
          <p style={{ color: 'red', textAlign: 'center' }}>
            Incorrect username/password
          </p>
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
