import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img_1 from '../assets/img/product-1.png';
import img_2 from '../assets/img/product-2.png';
import img_3 from '../assets/img/product-3.png';
import img_4 from '../assets/img/product-4.png';
import img_5 from '../assets/img/product-5.png';
import img_6 from '../assets/img/product-6.png';

export default class Product extends Component {
  render() {
    return (
        <div className="product" id='products'>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="product-title text-center">
                            <h1>Our Products</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="product-top justify-content-center">
                    <Col xs={12} md={6} xl={4} lg={6} className="d-flex">
                        <div className="product-card w-100">
                            <div className="product-card-text">
                                <h2>Multi-Server Discord Bot</h2>
                                <p>Start Trading</p>
                            </div>
                            <div className="product-card-img">
                                <img src={img_1} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl="4" lg={6}>
                        <div className="product-img">
                            <img src={img_2}  alt=""/>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl="4" lg={6} className="d-flex">
                        <div className="product-card card-3">
                            <div className="product-card-text">
                                <h2>ASAP AI Alerts</h2>
                            </div>
                            <div className="product-card-img">
                                <img src={img_3}  alt=""/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="product-bottom">
                    <Col xs={12} md={6} xl={4} lg={6} className="d-flex">
                        <div className="product-card w-100">
                            <div className="product-card-text">
                                <h2>Stakng -Stake & Earn</h2>
                                <p>Coming soon</p>
                            </div>
                            <div className="product-card-img">
                                <img src={img_4}  alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4} lg={6} className="d-flex">
                        <div className="product-card w-100">
                            <div className="product-card-text">
                                <h2>Mobile Terminal App</h2>
                                <p>Coming soon</p>
                            </div>
                            <div className="product-card-img">
                                <img src={img_5} alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4} lg={6} className="d-flex">
                        <div className="product-card w-100">
                            <div className="product-card-text">
                                <h2>Web Terminal Dapp</h2>
                                <p>Coming soon</p>
                            </div>
                            <div className="product-card-img">
                                <img src={img_6} alt=""/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}
