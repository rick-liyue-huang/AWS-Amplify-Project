import React from 'react';
import { Container, Card, Col, Row, Button, Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
// import { Storage, graphqlOperation, API } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

import { uploadData, getUrl } from 'aws-amplify/storage';

import { createContact } from '../../graphql/mutations';
import { listContacts } from '../../graphql/queries';

export const ContactPage = (props) => {
  const client = generateClient();
  const [contactData, setContactData] = React.useState({
    name: '',
    email: '',
    cell: '',
  });
  const [profilePic, setProfilePic] = React.useState('');
  const [contacts, setContacts] = React.useState([]);
  const [profilePicPaths, setProfilePicPaths] = React.useState([]);

  const addNewContact = async () => {
    const { name, email, cell } = contactData;

    // upload pic to S3
    // Storage.configure({ region: 'ap-southeast-2' });
    const { key } = await uploadData({
      key: `${uuid()}.png`,
      data: profilePic,
    }).result;

    const newContact = {
      id: uuid(),
      name,
      email,
      cell,
      profilePicPath: key,
    };

    // persist new contact to database
    await client.graphql({
      query: createContact,
      variables: { input: newContact },
    });
  };

  const getContacts = async () => {
    try {
      const contactsData = await client.graphql({
        query: listContacts,
      });
      console.log('contactsData: ', contactsData);
      const contactsList = contactsData.data.listContacts.items;
      setContacts(contactsList);

      contacts.map(async (contact, indx) => {
        const contactProfilePicPath = contacts[indx].profilePicPath;
        console.log('contactProfilePicPath: ', contactProfilePicPath);
        try {
          const contactProfilePicPathURI = await getUrl({
            key: contactProfilePicPath,
            options: { expires: 60 },
          });
          console.log('contactProfilePicPathURI: ', contactProfilePicPathURI);
          setProfilePicPaths((profilePicPaths) =>
            profilePicPaths.concat(contactProfilePicPathURI)
          );
          console.log('profilePicPaths: ', profilePicPaths);
        } catch (err) {
          console.log('error', err);
        }
      });
    } catch (err) {
      console.log('error: ', err);
    }
  };

  React.useEffect(() => {
    async function getUsers() {
      await getContacts();
    }
    getUsers();
    console.log('contacts: ', contacts);
  }, []);

  return (
    <Container>
      <Row className='px-4 py-5'>
        <Col>
          <h1>Contacts</h1>
        </Col>
      </Row>
      <Row className='px-4 py-5'>
        {contacts.map((contact, index) => (
          <Col className='px-2 py-2' key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src={profilePicPaths[index]?.url?.href} />
              <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>{contact.email}</Card.Text>
                <Card.Text>{contact.cell}</Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className='px-4 my-5'>
        <Col sm={3}>
          <h2>Add New Contact</h2>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicText'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Contact name'
                value={contactData.name}
                onChange={(e) =>
                  setContactData({ ...contactData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Contact email'
                value={contactData.email}
                onChange={(e) =>
                  setContactData({ ...contactData, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicText'>
              <Form.Label>Cell</Form.Label>
              <Form.Control
                type='text'
                placeholder='nnn-nnn-nnnn'
                value={contactData.cell}
                onChange={(e) =>
                  setContactData({ ...contactData, cell: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicText'>
              <Form.Label>Profile Pic</Form.Label>
              <Form.Control
                type='file'
                accept='image/png'
                onChange={(evt) => setProfilePic(evt.target.files[0])}
              />
            </Form.Group>
            <Button variant='primary' type='button' onClick={addNewContact}>
              Add Contact &gt;&gt;
            </Button>
            &nbsp;
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
