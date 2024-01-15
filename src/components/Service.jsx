import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img_1 from '../assets/img/service-card-1.png';
import img_2 from '../assets/img/service-card-2.png';
import img_3 from '../assets/img/service-card-3.png';
import img_4 from '../assets/img/service-card-4.png';
import img_5 from '../assets/img/service-card-5.png';
import img_6 from '../assets/img/service-card-6.png';

export default class Service extends Component {
    render() {
        return (
            <div className="service" id='features'>
                <Container>
                    <Row className="sermar">
                        <Col md={12} lg={6}>
                            <div className="service-title">
                                <h1>Fast Token Alerts & Rapid Transaction.</h1>
                            </div>
                        </Col>
                        <Col md={12} lg={6} className="justify-content-center d-flex align-items-center justify-content-lg-end ">
                            <p>We built on auto dex sniper bot on discord</p>
                        </Col>
                    </Row>
                    <Row className="service-card justify-content-center">
                        <Col xl={6} lg={8} md={12}>
                            <Row>
                                <Col md={12}>
                                    <div className="service-card-single card-1 d-flex ">
                                        <div className="service-card-single-text">
                                            <h2>Token Discovery</h2>
                                            <p>Get real - time new tokens alerts with our customs engine filtering system with locked liquidity open- and honeypot checker</p>
                                        </div>
                                        <div className="service-card-single-img">
                                            <img src={img_1} alt="" />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} className="d-flex">
                                    <div className="service-card-single card-2">
                                        <div className="service-card-single-img">
                                            <img src={img_4} alt="" />
                                        </div>
                                        <div className="service-card-single-text text-center">
                                            <h2>Limit Orders</h2>
                                            <p>Easily setup an on-chain buy and sell limits with our limit orders function, this enables you to setup a percentage changes to either buy after a price drop or sell after a price pump,</p>
                                        </div>

                                    </div>
                                </Col>
                                <Col xs={12} md={6} className="d-flex">
                                    <div className="service-card-single card-3">
                                        <div className="service-card-single-img">
                                            <img src={img_5} alt="" />
                                        </div>
                                        <div className="service-card-single-text text-center">
                                            <h2>Referral Program</h2>
                                            <p>Our refer-2-Earn allows our users to earn over 20% swap fee with their referral link and referred users get 5% off their default platform fee</p>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6} lg={8} md={12}>
                            <Row>
                                <Col md={6} xs={12} className="d-flex">
                                    <div className="service-card-single card-2">
                                        <div className="service-card-single-img">
                                            <img src={img_2} alt="" />
                                        </div>
                                        <div className="service-card-single-text text-center">
                                            <h2>Degen & Spot Trading</h2>
                                            <p>Trade like a pro with our fast buy/sell feature. Easily perform your dex transactions with ASAP at a fast rate.</p>
                                        </div>

                                    </div>
                                </Col>
                                <Col md={6} xs={12} className="d-flex">
                                    <div className="service-card-single card-3">
                                        <div className="service-card-single-img">
                                            <img src={img_3} alt="" />
                                        </div>
                                        <div className="service-card-single-text text-center">
                                            <h2>Auto Sniper</h2>
                                            <p>With our auto sniper system, you can easily set up an auto buying/selling order and watch the bot do the rest for you while you are away from your system. You can easily ape into newly released tokens that pass your
                                                filters
                                            </p>
                                        </div>

                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <div className="service-card-single card-6 d-flex">
                                        <div className="service-card-single-text">
                                            <h2>Hold-2-Earn</h2>
                                            <p>Earn rewards by simply holding your $ASAP token, 1% taxed funds will be shared with all holders as dividend in ETH</p>
                                        </div>
                                        <div className="service-card-single-img">
                                            <img src={img_6} alt="" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
