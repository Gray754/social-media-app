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

  updateInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.history.push('/profile');
    await this.props.loginUser(username, password);
  };

  render() {
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
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
