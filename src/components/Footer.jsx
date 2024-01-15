import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import nav_logo from '../assets/img/nav-logo.png'
import ready_img from '../assets/img/ready-img.png'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="ready" id='footer'>
                    <Container>
                        <Row className="rbg ">
                            <Col xl={6} md={7}>
                                <div className="ready-content ">
                                    <h1>Ready?</h1>
                                    <p>Share Your Referral Link and Earn Earn 20% of swap fees each time your friends complete swaps in Asap bot across all platforms.</p>
                                    <div className="ready-content-btn d-flex ">
                                        <a target="_blank" href="https://discord.com/invite/asapbot" className="aBtn rbtn1">Start Trading <svg width="16 " height="17 " viewBox="0 0 16 17 " fill="none " xmlns="http://www.w3.org/2000/svg ">
                                            <path d="M12.0035 5.67024L3.41153 14.2622L2 12.8507L10.591 4.25871H3.01922V2.26221H14V13.243H12.0035V5.67024Z " fill="currentColor" />
                                        </svg>
                                        </a>
                                        <a href="/" className="aBtn rbtn2">Get$ASAP <svg width="16 " height="17 " viewBox="0 0 16 17 " fill="none " xmlns="http://www.w3.org/2000/svg ">
                                            <path d="M12.0035 5.67024L3.41153 14.2622L2 12.8507L10.591 4.25871H3.01922V2.26221H14V13.243H12.0035V5.67024Z " fill="currentColor" />
                                        </svg>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} md={5} className="d-flex justify-content-center">
                                <div className="ready-img ">
                                    <img src={ready_img} alt=" " />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <footer className="footer ">
                    <Container>
                        <Row>
                            <Col md={5}>
                                <div className="footer-item ">
                                    <a href="/" className="footer-item-logo ">
                                        <img src={nav_logo} alt=" " />
                                    </a>
                                    <div className="footer-item-link d-flex ">
                                        <div className="footer-item-link-single ">
                                            <a target='_blank' href="https://twitter.com/asapbotXYZ"> <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_b_5_1093)">
                                                    <rect y="0.762207" width="40" height="40" rx="20" fill="url(#paint0_linear_5_1093)" />
                                                    <rect x="0.363304" y="1.12551" width="39.2734" height="39.2734" rx="19.6367" stroke="#2B211D" strokeWidth="0.726608" />
                                                </g>
                                                <path d="M28.6354 15.1682C28 15.4503 27.317 15.6403 26.6003 15.7259C27.3321 15.2876 27.8942 14.5932 28.1583 13.7657C27.4739 14.1715 26.7154 14.4666 25.908 14.6256C25.2625 13.9369 24.3407 13.5066 23.3217 13.5066C21.0341 13.5066 19.353 15.641 19.8697 17.8567C16.9258 17.7092 14.315 16.2987 12.567 14.155C11.6387 15.7475 12.0856 17.8308 13.663 18.8857C13.083 18.867 12.5361 18.708 12.059 18.4424C12.0201 20.0839 13.1967 21.6196 14.9008 21.9614C14.4021 22.0967 13.8559 22.1283 13.3003 22.0218C13.7508 23.4294 15.0591 24.4534 16.6106 24.4822C15.121 25.6501 13.2442 26.1718 11.3646 25.9502C12.9326 26.9555 14.7957 27.542 16.7962 27.542C23.375 27.542 27.0918 21.9858 26.8673 17.0025C27.5595 16.5024 28.1604 15.8784 28.6354 15.1682Z" fill="white" />
                                                <defs>
                                                    <filter id="filter0_b_5_1093" x="-2.6087" y="-1.84649" width="45.2174" height="45.2174" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.30435" />
                                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5_1093" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5_1093" result="shape" />
                                                    </filter>
                                                    <linearGradient id="paint0_linear_5_1093" x1="8.69967" y1="16.9106" x2="40" y2="22.7798" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#2D221E" />
                                                        <stop offset="1" stopColor="#1C1512" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                            </a>
                                        </div>
                                        <div className="footer-item-link-single ">
                                            <a target='_blank' href="https://t.me/myasapbot">
                                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g filter="url(#filter0_b_5_1094)">
                                                        <rect y="0.762207" width="40" height="40" rx="20" fill="url(#paint0_linear_5_1094)" />
                                                        <rect x="0.363304" y="1.12551" width="39.2734" height="39.2734" rx="19.6367" stroke="#2B211D" strokeWidth="0.726608" />
                                                    </g>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.5177 27.8636C24.7585 28.0341 25.0689 28.0767 25.3456 27.972C25.6223 27.8666 25.8257 27.6302 25.887 27.3438C26.5369 24.2896 28.1134 16.5591 28.7049 13.7808C28.7498 13.5715 28.675 13.3538 28.5105 13.214C28.346 13.0741 28.1179 13.0337 27.9145 13.1093C24.7787 14.2699 15.1218 17.8933 11.1747 19.3538C10.9241 19.4465 10.7611 19.6873 10.7693 19.9513C10.7783 20.2161 10.9563 20.4457 11.2128 20.5227C12.9829 21.0522 15.3065 21.7888 15.3065 21.7888C15.3065 21.7888 16.3924 25.0681 16.9585 26.7358C17.0295 26.9452 17.1933 27.1097 17.4095 27.1666C17.6248 27.2227 17.8552 27.1636 18.016 27.0118C18.9253 26.1532 20.3313 24.8258 20.3313 24.8258C20.3313 24.8258 23.0026 26.7844 24.5177 27.8636ZM16.2839 21.3745L17.5396 25.5161L17.8185 22.8934C17.8185 22.8934 22.6698 18.5177 25.4353 16.0236C25.5161 15.9504 25.5273 15.8277 25.46 15.7417C25.3935 15.6557 25.2708 15.6355 25.1788 15.6938C21.9736 17.7407 16.2839 21.3745 16.2839 21.3745Z" fill="white" />
                                                    <defs>
                                                        <filter id="filter0_b_5_1094" x="-2.6087" y="-1.84649" width="45.2174" height="45.2174" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.30435" />
                                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5_1094" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5_1094" result="shape" />
                                                        </filter>
                                                        <linearGradient id="paint0_linear_5_1094" x1="8.69967" y1="16.9106" x2="40" y2="22.7798" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#2D221E" />
                                                            <stop offset="1" stopColor="#1C1512" stopOpacity="0" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>

                                            </a>
                                        </div>
                                        <div className="footer-item-link-single ">
                                            <a target='_blank' href="https://discord.com/invite/asapbot">
                                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g filter="url(#filter0_b_5_1095)">
                                                        <rect y="0.762207" width="40" height="40" rx="20" fill="url(#paint0_linear_5_1095)" />
                                                        <rect x="0.363304" y="1.12551" width="39.2734" height="39.2734" rx="19.6367" stroke="#2B211D" strokeWidth="0.726608" />
                                                    </g>
                                                    <path d="M26.4694 15.2325C25.3327 14.7026 24.1019 14.318 22.8198 14.0957C22.8085 14.0954 22.7973 14.0975 22.787 14.1019C22.7767 14.1064 22.7674 14.113 22.7599 14.1214C22.6061 14.4034 22.4266 14.771 22.3069 15.053C20.9471 14.8479 19.5641 14.8479 18.2043 15.053C18.0846 14.7624 17.9051 14.4034 17.7427 14.1214C17.7342 14.1043 17.7085 14.0957 17.6829 14.0957C16.4008 14.318 15.1785 14.7026 14.0332 15.2325C14.0247 15.2325 14.0161 15.2411 14.0076 15.2496C11.6827 18.7283 11.0417 22.1131 11.3579 25.4636C11.3579 25.4807 11.3665 25.4978 11.3836 25.5063C12.9221 26.6346 14.4007 27.3183 15.8623 27.7713C15.888 27.7799 15.9136 27.7713 15.9221 27.7542C16.264 27.2841 16.5717 26.7884 16.8367 26.267C16.8538 26.2328 16.8367 26.1986 16.8025 26.1901C16.3153 26.0021 15.8538 25.7798 15.4008 25.5234C15.3666 25.5063 15.3666 25.455 15.3922 25.4294C15.4862 25.361 15.5803 25.2841 15.6743 25.2157C15.6914 25.1986 15.717 25.1986 15.7341 25.2072C18.6744 26.5491 21.8454 26.5491 24.7514 25.2072C24.7685 25.1986 24.7942 25.1986 24.8113 25.2157C24.9053 25.2926 24.9993 25.361 25.0933 25.4379C25.1275 25.4636 25.1275 25.5149 25.0848 25.532C24.6403 25.7969 24.1702 26.0106 23.683 26.1986C23.6489 26.2072 23.6403 26.2499 23.6489 26.2756C23.9224 26.7969 24.2301 27.2927 24.5634 27.7628C24.589 27.7713 24.6147 27.7799 24.6403 27.7713C26.1105 27.3183 27.5891 26.6346 29.1276 25.5063C29.1447 25.4978 29.1533 25.4807 29.1533 25.4636C29.5294 21.5917 28.5293 18.2326 26.5036 15.2496C26.4951 15.2411 26.4865 15.2325 26.4694 15.2325ZM17.2812 23.4208C16.4008 23.4208 15.6657 22.6088 15.6657 21.6088C15.6657 20.6087 16.3837 19.7968 17.2812 19.7968C18.1872 19.7968 18.9051 20.6173 18.8966 21.6088C18.8966 22.6088 18.1786 23.4208 17.2812 23.4208ZM23.2386 23.4208C22.3582 23.4208 21.6232 22.6088 21.6232 21.6088C21.6232 20.6087 22.3411 19.7968 23.2386 19.7968C24.1446 19.7968 24.8626 20.6173 24.854 21.6088C24.854 22.6088 24.1446 23.4208 23.2386 23.4208Z" fill="white" />
                                                    <defs>
                                                        <filter id="filter0_b_5_1095" x="-2.6087" y="-1.84649" width="45.2174" height="45.2174" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.30435" />
                                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5_1095" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5_1095" result="shape" />
                                                        </filter>
                                                        <linearGradient id="paint0_linear_5_1095" x1="8.69967" y1="16.9106" x2="40" y2="22.7798" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#2D221E" />
                                                            <stop offset="1" stopColor="#1C1512" stopOpacity="0" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="footer-link d-flex justify-content-between">
                                    <div className="footer-link-single">
                                        <h3>Menu</h3>
                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="#about">About</a></li>
                                            <li><a href="#roadmap">Roadmap</a></li>
                                            <li><a href="/">Solution</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-link-single ">
                                        <h3>Features</h3>
                                        <ul>
                                            <li><a href="/">Asapbot contract</a></li>
                                            <li><a href="/">Security audits</a></li>
                                            <li><a href="/">Info</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-link-single ">
                                        <h3>About us</h3>
                                        <ul>
                                            <li><a href="/">FAQ</a></li>
                                            <li><a href="/">Contact us</a></li>
                                            <li><a href="/">Help Centers</a></li>
                                            <li><a href="/">Career</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <div className="greborder"></div>
                            <div className="footer-copy flex-wrap d-flex justify-content-center justify-content-md-between">
                                <div className="footer-copy-left">
                                    <p>© Asapbot.xyz. All rights reserved.</p>
                                </div>
                                <div className="footer-copy-right">
                                    <ul>
                                        <li><a href="/">Terms</a></li>
                                        <li><a href="/">Privacy</a></li>
                                        <li><a href="/">Legal</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </footer>
            </>
        )
    }
}
