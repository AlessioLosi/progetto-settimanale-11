import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; 
function MainContent() {
  return (
<Container fluid style={{ marginLeft: '210px' }}> 
      <Row className='justify-content-start '>
        <Col xs={12} lg={11} className="mainLinks  d-md-flex ">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>

    </Container>
  );
}

export default MainContent;