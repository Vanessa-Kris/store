import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


const Home = () => {
    return (
      <> <Container className='home'>
             
        <img src="./jamesblackbag.jpg" alt="Bag" style={{ width: '100%', height: '100%' }} />
        <div class="centered">
       
          <h1>Daily Deals</h1>
          <button type="button" class="btn btn-outline-light">Shop Now</button>
        </div>
        </Container>

      <Container className='  homediv'>
          <Row>
            <Col xs={6} md={3}><img src="./perfumewall.jpg" alt="Bag" style={{ width: '100%', height: '90%', padding: '3px' }} /> <div>Perfumes</div> </Col>
            <Col xs={6} md={3}><img src="./Pink Bag.png" alt="Bag" style={{ width: '100%', height: '90%', padding: '3px' }} /> <div>Bags </div> </Col>
            <Col xs={6} md={3}><img src="./africachain.jpeg" alt="Bag" style={{ width: '100%', height: '90%', padding: '3px' }} /> <div>Accessories </div> </Col>
            <Col xs={6} md={3}><img src="./Square Bag.jpeg" alt="Bag" style={{ width: '100%', height: '90%', padding: '3px' }} /> <div>Bags </div> </Col>
          </Row>
        </Container>
        
        <Container className='mb-5 homediv'>
          <Row className=' '>
            <Col xs={12} md={6} className='aboutdiv text-center text-white d-flex align-items-center '>
              <div >
                <h1 className=' '>About Stunners</h1>
                <p>We founded Stunners with one goal in mind:
                 providing a high-quality, smart, and reliable 
                 online store. Our passion for excellence has 
                 driven us from the beginning, and continues to
                  drive us into the future. We know that every 
                  product counts, and strive to make the entire 
                  shopping experience as rewarding as possible.
                  Check it out for yourself!</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
            <img src="./tamara-unsplash.jpg" alt="Bag" style={{ width: '100%', height: '100%' }} />
            </Col>
          </Row>
        </Container>

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

        <Container className="text-center mb-5 homediv">
        <h1 className = "p-3">Our Services</h1>
        <Row>
        <Col xs={6} md={3}>
        <Card>
      <Card.Img variant="top" src="./casual.jpeg" style={{  height: '100%' }}/>
      <Card.Body>
        <Card.Title>Casual Make Up.</Card.Title>
        <Card.Text>
          3000
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
      <Button variant="outline-dark">Book Now</Button>
       
      </Card.Body>
    </Card>
        </Col>

        <Col xs={6} md={3}>
        <Card>
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
        <Card>
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
        <Card>
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
        </>
    )
  };
  
  export default Home;
  