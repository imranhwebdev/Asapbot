import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/nav-logo.png';
import favicon from '../assets/img/favicon.png'

export default function header() {
    const [isShow,setIsShow]= useState(false);
        const toggleMenu = () => {
            setIsShow(!isShow);
            console.log(isShow);
        }
        const [fix, setFix] = useState(false)
        function setFixed(){
            if(window.scrollY >= 392){
                setFix(true)
            }else{
                setFix(false)
            }
        }
        useEffect(() => {
            window.addEventListener('scroll', setFixed);
        
            // Cleanup the event listener on component unmount
            return () => {
              window.removeEventListener('scroll', setFixed);
            };
          }, []);
        return (
            <>
                <div className={`removeTab ${isShow ? 'show' : ''}`} onClick={toggleMenu}></div>
                <div className={fix ? 'nav fixed' : 'nav'}>
                    <Container>
                        <Row>
                            <Col md={12} className="d-flex justify-content-between align-items-center">
                                <a href='/' className="nav-logo">
                                    <img className=" logo1 d-none d-sm-block" src={logo} alt="asapBot" />
                                    <img className=" d-sm-none" src={favicon} alt="asapBot" />
                                </a>
                                <nav className={`nav-link ${isShow ? 'menushow':''}`}>
                                    <a href='/' className="nav-logo d-xl-none pt-3">
                                        <img className=" logo1" src={logo} alt="asapBot" />
                                    </a>
                                    <ul>
                                        <li><a href="#about">About us</a></li>
                                        <li><a href="#features">Features</a></li>
                                        <li><a href="#products">Products</a></li>
                                        <li><a href="#roadmap">Roadmap</a></li>
                                        <li><a href="#getstarted">Get Started</a></li>
                                        <li><a href="#">Referral Program</a></li>
                                        <li><a href="#footer"  offset={fix ? -70 : -50}>Contact us</a></li>
                                    </ul>
                                </nav>
                                <div className="nav-btn d-flex">
                                    <a href="https://rewards.asapbot.xyz/" className="aBtn">Launch App 
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.0035 5.90804L3.41153 14.5L2 13.0885L10.591 4.49651H3.01922V2.5H14V13.4808H12.0035V5.90804Z" fill="white" />
                                        </svg>
                                    </a>
                                    <div className="menuTrigger" onClick={toggleMenu}>
                                        <svg className="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M867.995 459.647h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353z" />
                                            <path d="M867.995 763.291h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353z" />
                                            <path d="M156.005 260.709h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353z" />
                                        </svg>
                                    </div>
                                </div>
                            </Col>
                            <div className="greborder"></div>
                        </Row>
                    </Container>
                </div>
            </>
        )
}
