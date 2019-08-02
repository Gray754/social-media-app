import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      city: '',
      state: '',
      username: '',
      password: '',
      email: ''
    };
  }

  

  render() {
    return (
      <Container>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder='First Name' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder='Last Name' />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control placeholder='1234 Main Street' />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control placeholder='Texas' />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control placeholder='Username' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control placeholder='Password' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control placeholder='dev@example.com' />
        </Form.Group>
      </Container>
    );
  }
}

export default SignUp;
