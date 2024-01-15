import React, { Component } from 'react'
import { Container, Row , Col} from 'react-bootstrap'

import banner from '../assets/img/banner-img.png';
import weblink1 from '../assets/img/weblink-1.png'
import weblink2 from '../assets/img/weblink-2.png'
import weblink3 from '../assets/img/weblink-3.png'

export default class Banner extends Component {
    render() {
      const style = {
        backgroundColor:'#1c1512',
        borderRadius:'8px',

      }
    return (
        <section className="banner">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="banner-content">
                            <h1>Fastest Auto Uniswap Sniper Bot On Discord</h1>
                            <p>Asapbot provides an on-chain real - time new token discovery alert from the blockchain, as well as sniping service.</p>
                            <h4 className="textcolor">Be the first to discover the next gem.</h4>
                            <a target='_blank' href="https://discord.com/invite/asapbot" className="aBtn">Start Trading  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0035 5.90804L3.41153 14.5L2 13.0885L10.591 4.49651H3.01922V2.5H14V13.4808H12.0035V5.90804Z" fill="white"/>
                                </svg> 
                            </a>
                            <a href="/" className="aBtn banner-btn2">Get$ASAP  
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0035 5.90804L3.41153 14.5L2 13.0885L10.591 4.49651H3.01922V2.5H14V13.4808H12.0035V5.90804Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="banner-img">
                            <img src={banner} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="link d-flex justify-content-center">
                            <a target='_blank' href="https://discord.com/invite/asapbot" className="link-single d-flex align-items-center">
                                <div className="link-single-logo">
                                    <img src={weblink1} alt="" />
                                </div>
                                <div className="link-single-text">
                                    <p>Available</p>
                                    <div>
                                        <h4>Discord</h4>
                                    </div>
                                </div>
                            </a>
                            <a href="/" className="link-single d-flex align-items-center">
                                <div className="link-single-logo">
                                    <img src={weblink2} alt="" />
                                </div>
                                <div className="link-single-text">
                                    <p>Soon</p>
                                    <div>
                                        <h4>Webapp</h4>
                                    </div>
                                </div>
                            </a>
                            <a href="/" className="link-single d-flex align-items-center">
                                <div className="link-single-logo" style={style}>
                                    <img src={weblink3} alt=""/>
                                </div>
                                <div className="link-single-text">
                                    <p>Later</p>
                                    <div>
                                        <h4>Play store</h4>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
  }
}
