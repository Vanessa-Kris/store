import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
      <Container className='mb-5 homediv p-5' style={{ background: '#0001' }}>
      <Row className=' '>
          <Col xs={12} md={6} className='text-center'>
          <h1 className='mt-5'>Get in Touch</h1> 
          <p className='mt-1'>Bamenda, Cameroon P.O Box 0000</p> 
          <p className='mt-1'>Stunners@gmail.com</p> 
          <p className='mt-1'>650 39 33 69</p>
          </Col>

          <Col>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
           <Form.Control as="textarea" rows={3} />
           </Form.Group>

              <Button variant="primary" type="submit">
              Submit
              </Button>
               </Form>
          </Col>
          </Row>
      </Container>
    )
  };
  
  export default Contact;
  