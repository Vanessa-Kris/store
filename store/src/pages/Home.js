import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Home = () => {
    return (
      <> <Container className='banner'>
        <img src="./tamara-unsplash.jpg" alt="Bag" style={{ width: '100%', height: '100%' }} />
        <div class="centered">
          <h1>Daily Deals</h1>
          <button type="button" class="btn btn-outline-light">Shop Now</button>
        </div>
        </Container>

      <Container className='  homediv'>
          <Row>
            <Col xs={12} md={3}><img src="./black bag.jpeg" alt="Bag" style={{ width: '100%', height: '100%' }} /> <div>Bag <br/> 888</div> </Col>
            <Col xs={12} md={3}><img src="./Pink Bag.png" alt="Bag" style={{ width: '100%', height: '100%' }} /> <div>Bag <br/> 888</div> </Col>
            <Col xs={12} md={3}><img src="./Square Bag.jpeg" alt="Bag" style={{ width: '100%', height: '100%' }} /> <div>Bag <br/> 888</div> </Col>
            <Col xs={12} md={3}><img src="./Red Bag.jpg" alt="Bag" style={{ width: '100%', height: '100%' }} /> <div>Bag <br/> 888</div> </Col>
          </Row>
        </Container>
        
        <Container className='mb-5 homediv'>
          <Row className='mt-5 '>
            <Col xs={12} md={6} className='aboutdiv text-center text-white d-flex align-items-center justify-content-center'>
              <div>
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

        <Container className='mb-5 homediv'>
        <Row className='mt-5 '>
            <Col xs={12} md={6} className=' text-center  d-flex align-items-center justify-content-center'>
            <h1 className=' '>Get Connected</h1> <br/>
            <p>Bamenda, Cameroon</p> <br/>
            <p>Stunners@gmail.com</p> <br/>
            <p>650 39 33 69</p>
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

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Message</Form.Label>
               <Form.Control type="text" placeholder="Enter message" />
                </Form.Group>

                <Button variant="primary" type="submit">
                Submit
                </Button>
                 </Form>
            </Col>
            </Row>
        </Container>
        </>
    )
  };
  
  export default Home;
  