import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

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
      email: '',
      toggleDetails: false
    };
  }

  updateInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerUser = (e) => {
    e.preventDefault();
    const { fname, lname, city, state, username, password, email } = this.state;
    axios
      .post('/register', {
        username,
        password,
        email
      })
      .then((response) => {
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  nextPage = () => {
    this.setState({ toggleDetails: !this.state.toggleDetails });
  };

  render() {
    return (
      <Container>
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
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            placeholder='dev@example.com'
            name='email'
            onChange={this.updateInput}
          />
        </Form.Group>
        <Button
          block
          onClick={() => {
            this.props.history.push('/');
          }}
        >
          Back
        </Button>
        <Button block onClick={this.registerUser}>
          Next
        </Button>
        {/* <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            placeholder='First Name'
            name='fname'
            onChange={this.updateInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder='Last Name'
            name='lname'
            onChange={this.updateInput}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder='123 Main Street'
              name='city'
              onChange={this.updateInput}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control
              placeholder='Texas'
              name='state'
              onChange={this.updateInput}
            />
          </Form.Group>
        </Form.Row>
        <Button block onClick={this.submitInfo}>
          Submit
        </Button> */}
      </Container>
    );
  }
}

export default SignUp;
