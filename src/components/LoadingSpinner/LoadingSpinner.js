import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

export default function LoadingSpinner() {
  return (
    <Container
      style={{
        height: '90vh',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Spinner animation='border' style={{ width: '100px', height: '100px' }} />
    </Container>
  );
}
