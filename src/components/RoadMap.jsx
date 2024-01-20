import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,  Navigation } from 'swiper/modules';
import { Container, Row, Col } from "react-bootstrap";

function RoadMap() {
  const SectionTitle = "Technical Roadmap";
  const slideData = [
    [
      'Project Legacy Development', 
      'Team Assembling Project Launch', 
      'Beta Testing', 
      'Token Alerts', 
      'Buy / Sell Swaps', 
      'Token Metrics Listing (CMC, CG)', 
      'Dashboard release', 
      'Frontend Upgrade release', 
      'V1 Beta Launching'
    ],
    [
      'Swap Fee Integrations', 
      'Limit Orders (Buy / Sell)', 
      'User-Generated Wallet Manager', 
      'Token Scanner Alert Upgrades',
      'PNL and Trade History',
      'Burn Liquidity Alert',
      'User Bugs Reporting Log',
      'Partnership',
      'Marketing',
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
          {slideData.map((items, index) => (
            <SwiperSlide key={index} className="timeSingleBox">
              <span className='phase'>Phase {index + 1}</span>
              <ul className="time_line_list">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default RoadMap;
