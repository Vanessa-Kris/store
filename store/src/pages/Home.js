import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => {
    return (
      <> <Container className='banner'>
        <img src="./tamara-unsplash.jpg" alt="Bag" style={{ width: '100%', height: '100%' }} />
        <div class="centered">
          <h1>Daily Deals</h1>
          <button type="button" class="btn btn-outline-light">Shop Now</button>
        </div>
        </Container>

      <Container className='mt-5 mb-5'>
          <Row>
            <Col><img src="./black bag.jpeg" alt="Bag" style={{ width: '100%', height: '100%' }} /> <div>Bag <br/> 888</div> </Col>
            <Col><img src="./Pink Bag.png" alt="Bag" style={{ width: '100%', height: '100%' }} /> <div>Bag <br/> 888</div> </Col>
            <Col><img src="./Square Bag.jpeg" alt="Bag" style={{ width: '100%', height: '100%' }} /> <div>Bag <br/> 888</div> </Col>
            <Col><img src="./Red Bag.jpg" alt="Bag" style={{ width: '100%', height: '100%' }} /> <div>Bag <br/> 888</div> </Col>

          </Row>
        </Container></>
    )
  };
  
  export default Home;
  