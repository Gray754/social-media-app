import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        minHeight: '50vh'
      }}
    >
      <Row style={{ textAlign: 'center' }}>
        <Col xs={12}>
          <h2>Welcome to DevConnect</h2>
        </Col>
        <Col xs={12}>
          <h4>Get connected with developers around the globe.</h4>
        </Col>
      </Row>
      <Link to='/signup'>
        <Button variant='primary' size='lg' block>
          Sign Up
        </Button>
      </Link>
      <Link to='/login'>
        <Button variant='secondary' size='lg' block>
          Login as Existing User
        </Button>
      </Link>
    </Container>
  );
}
