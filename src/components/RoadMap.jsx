import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,  Navigation } from 'swiper/modules';
import { Container, Row, Col } from "react-bootstrap";

function RoadMap() {
  const SectionTitle = "Technical Roadmap";
  const slideData = [
    [
      
    ],
    [
      'UX Updates',
      'MEV Protection',
      'Auto Sniper released',
      'New Landing page Upgrade',
      'Auto Buy/Auto Selling launched',
    ],
    [
      'Multi-Server launching',
      'Multi-Chain Intregration',
      'Advance Sniper Upgrades',
      'Marketing',
    ],
    [
      'Asap Rebranding',
      '-New Tokenomics',
      '-Introducing Asap Staking',
      'Asap Api beta development',
    ],
    [
      'ASAP AI Engine  Beta',
      '-Trade, snipe better by leveraging our AI Algo',
      'ASAPAD - Stake and invest in new launch',
    ],
    [
      'Mobile Bot Apps (iOS & Android)',
      'Web Dapp Bot & Sniper',
      'Multi-Platforms',
      '- Discord, Mobile, Web bot platforms',
      '- Trade & snipe on-chain Asap anywhere you go',
    ],
    [
      'ASAP API Premium services',
      'Asap Bet',
      'On-chain casino coming to ASAPBET',
    ],
    
  ]; 
  
  return (
    <section class="timeline" id='roadmap'>
      <Container>
        <Row>
          <Col>
            <div className="section__title">
              <h2>{SectionTitle}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Swiper 
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              rewind={true} 
              navigation={true}
              autoplay={{
                delay: 20000,
                disableOnInteraction: false,
              }}
              speed={800} 
              modules={[Autoplay, Navigation]}
              initialSlide={3}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  autoplay: {
                    delay: 4000,
                  },
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              className="timeLineSlider"
            >
            <SwiperSlide className="timeSingleBox">
              <span className='phase'>Phase 1</span>
              <ul className="time_line_list">
                <li className='active'>Project Legacy Development</li>
                <li className='active'>Team Assembling Project Launch</li>
                <li className='active'>Beta Testing</li>
                <li className='active'>Token Alerts</li>
                <li className='active'>Buy / Sell Swaps</li>
                <li className='active'>Token Metrics Listing (CMC, CG)</li>
                <li className='active'>Dashboard release</li>
                <li className='active'>Frontend Upgrade release</li>
                <li className='active'>V1 Beta Launching</li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="timeSingleBox">
              <span className='phase'>Phase 2</span>
              <ul className="time_line_list">
                <li className='active'>Swap Fee Integrations</li>
                <li className='active'>Limit Orders (Buy / Sell)</li>
                <li className='active'>User-Generated Wallet Manager</li>
                <li className='active'>Token Scanner Alert Upgrades</li>
                <li className='active'>PNL and Trade History</li>
                <li className='active'>Burn Liquidity Alert</li>
                <li className='active'>User Bugs Reporting Log</li>
                <li className='active'>Partnership</li>
                <li className='active'>Marketing</li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="timeSingleBox">
              <span className='phase'>Phase 3</span>
              <ul className="time_line_list">
                <li className='active'>UX Updates</li>
                <li className='active'>MEV Protection</li>
                <li className='active'>Auto Sniper released</li>
                <li className='active'>New Landing page Upgrade</li>
                <li className='active'>Auto Buy/Auto Selling launched</li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="timeSingleBox">
              <span className='phase'>Phase 4</span>
              <ul className="time_line_list">
                <li>Multi-Server launching</li>
                <li>Multi-Chain Intregration</li>
                <li>Advance Sniper Upgrades</li>
                <li>Marketing</li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="timeSingleBox">
              <span className='phase'>Phase 5</span>
              <ul className="time_line_list">
                <li> Asap Rebranding </li>
                <li>-New Tokenomics</li>
                <li>-Introducing Asap Staking</li>
                <li>Asap Api beta development</li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="timeSingleBox">
              <span className='phase'>Phase 6</span>
              <ul className="time_line_list">
                <li>ASAP AI Engine  Beta</li>
                <li>-Trade, snipe better by leveraging our AI Algo</li>
                <li>ASAPAD - Stake and invest in new launch</li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="timeSingleBox">
              <span className='phase'>Phase 7</span>
              <ul className="time_line_list">
                <li>Mobile Bot Apps (iOS & Android)</li>
                <li>Web Dapp Bot & Sniper</li>
                <li>Multi-Platforms</li>
                <li> - Discord, Mobile, Web bot platforms</li>
                <li> - Trade & snipe on-chain Asap anywhere you go</li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="timeSingleBox">
              <span className='phase'>Phase 8</span>
              <ul className="time_line_list">
                <li>ASAP API Premium services</li>
                <li>Asap Bet</li>
                <li>On-chain casino coming to ASAPBET</li>
              </ul>
            </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default RoadMap;
