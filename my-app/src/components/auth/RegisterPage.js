import React from 'react';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';

export const RegisterPage = () => {
  return (
    <Container>
      <Row className='px-4 my-5'>
        <h1>Register</h1>
      </Row>
      <Row className='px-4 my-5'>
        <Col xs={12} sm={6}>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group controlId='formConfirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' placeholder='Confirm Password' />
            </Form.Group>

            <button className='btn btn-primary' type='submit'>
              Submit
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};