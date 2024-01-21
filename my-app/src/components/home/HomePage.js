import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export function HomePage(props) {
  return (
    <Container>
      <Row className='px-4 my-5'>
        <Col xs={4} sm={6}>
          <Image src='/img/logo1.png' fluid />
        </Col>
        <Col sm={6}>
          <h1 className='font-weight-light'>Contacts App</h1>
          <p className='mt-4'>
            Welcome to the Contacts App. This app is a simple example of a
            React-based web application that uses AWS Cognito for user
            authentication and authorization.
          </p>
          {props.isAuthenticated === false && (
            <>
              <Link to='/login'>
                <Button variant='outline-primary'>Login &gt;&gt;</Button>
              </Link>
              &nbsp;&nbsp;
              <Link to='/register'>
                <Button variant='outline-primary'>Register &gt;&gt;</Button>
              </Link>
            </>
          )}
          {props.isAuthenticated !== false && (
            <Link
              to='/contacts'
              state={{ authenticated: props.isAuthenticated }}
            >
              <Button variant='outline-primary'>View Contacts &gt;&gt;</Button>
            </Link>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
