import React, { Component } from 'react'
import trad_img from '../assets/img/trade-left.png'
import { Container, Row, Col } from 'react-bootstrap'

export default class Trade extends Component {
  render() {
    return (
        <section className="trade" id='about'>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <div className="trade-title">
                            <h1>Trade, Snipe & Earn <br /> Your All-in-one Trading and Sniper Bot.</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={10} xxl={8} lg={6} xl={7}>
                        <div className="trade-img">
                            <img src={trad_img} alt=""/>
                        </div>
                    </Col>
                    <Col md={10} xxl={4} lg={6} xl={5} className="d-flex align-items-center">
                        <div className="trade-content">
                            <p className="tp1">Asap bot is an All-in-one Trading and sniper Bot that provides on-chain real-time new token discovery alerts from the blockchain, as well as sniping services. </p>
                            <p>With Asap bot, you can find the latest 1000x gems tokens deployed on the blockchain and trade them as soon as possible.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
  }
}
