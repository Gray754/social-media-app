import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: 'g123',
      password: 'g123'
    };
  }

  updateInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginUser = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post('/login', { username, password })
      .then((response) => {
        console.log(`logged in user ${username} with password ${password}`);
      })
      .catch((err) => {
        console.log('error loggin in');
      });
  };

  render() {
    return (
      <Container>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control placeholder='Username' onChange={this.updateInput} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control placeholder='Password' />
        </Form.Group>
        <Button onClick={() => this.loginUser} block>
          Login
        </Button>
      </Container>
    );
  }
}

export default Login;
