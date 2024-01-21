import React from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';

export const ContactPage = () => {
  return (
    <Container>
      <Row className='px-4 py-5'>
        <Col>
          <h1>Contacts</h1>
        </Col>
      </Row>
      <Row className='px-4 py-5'>
        <Col className='px-2 py-2'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='/img/empty.png' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='px-2 py-2'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='/img/empty.png' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
