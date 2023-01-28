import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Shop = () => {
    return (
      <Container className="text-center mb-5 homediv">
     
      <Row>
      <Col xs={6} md={3}>
      <Card >
    <Card.Img variant="top" src="./casual.jpeg" style={{  height: '100%' }}/>
    <Card.Body>
      <Card.Title>Casual Make Up.</Card.Title>
      <Card.Text>
        3000
      </Card.Text>
    </Card.Body>
   
    <Card.Body>
    <Button variant="outline-dark">Book Now</Button>
    <FontAwesomeIcon icon={faEnvelope} />
     
    </Card.Body>
  </Card>
      </Col>

      <Col xs={6} md={3}>
      <Card >
    <Card.Img variant="top" src="./jpeg(12)" style={{  height: '100%' }}/>
    <Card.Body>
      <Card.Title>Full face Glam.</Card.Title>
      <Card.Text>
       5000 
      </Card.Text>
    </Card.Body>
   
    <Card.Body>
    <Button variant="outline-dark">Book Now</Button>
     
    </Card.Body>
  </Card>
      </Col>

      <Col xs={6} md={3}>
      <Card >
    <Card.Img variant="top" src="./Bella.jpeg" style={{  height: '100%' }}/>
    <Card.Body>
      <Card.Title>Traditional Glam.</Card.Title>
      <Card.Text>
        15,000
      </Card.Text>
    </Card.Body>
   
    <Card.Body>
    <Button variant="outline-dark">Book Now</Button>
     
    </Card.Body>
  </Card>
      </Col>

      <Col xs={6} md={3}>
      <Card >
    <Card.Img variant="top" src="./bride.jpeg" style={{  height: '100%' }}/>
    <Card.Body>
      <Card.Title>Bridal Make Over.</Card.Title>
      <Card.Text>
        30,000
      </Card.Text>
    </Card.Body>
   
    <Card.Body>
    <Button variant="outline-dark">Book Now</Button>
     
    </Card.Body>
  </Card>
      </Col>

      </Row>
      </Container>
    )
  };
  
  export default Shop;
  