import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const HomeComponent = () => {
  return (
    <div>
      <Container>
        <Row className='px-4 my-5'>
          <Col xs={4} sm={6}>
            <Image src='/img/logo1.png' fluid />
          </Col>
          <Col xs={8} sm={6}>
            <h1 className='display-1'>My App</h1>
            <p className='lead'>This is my app.</p>
            <p>
              <a className='btn btn-primary btn-lg' href='/about' role='button'>
                Learn more
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};