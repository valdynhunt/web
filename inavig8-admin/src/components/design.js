import React, { Component } from 'react';
import Header from './Header0';
import Graphics from './Graphics'
import Data from './Data'
import Footer from './Footer0';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';



class Design extends Component {
    
    constructor() {
        super()
        this.state = {}
      }

    render() {
        return (
        <div>
        <Container fluid="true" className="main">
            <Row><Col sm={12}><Header className="header" /></Col></Row>
            <Row>
            <Col sm={9}><Graphics className="graphics" /></Col>
            <Col sm={3}><Data className="data" /></Col>
            </Row>
            <Row><Col sm={12}><Footer className="footer" /></Col></Row>
        </Container>
        </div>
        );
    }
}

export default Design;