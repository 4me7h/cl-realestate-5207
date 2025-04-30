import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gridimg from './Gridimg';
import { Fade } from 'react-awesome-reveal';
import { FaBed, FaCar, FaRulerCombined, FaDollarSign } from "react-icons/fa";

// import partners01 from '../images/partners-01.png';
// import partners02 from '../images/partners-02.png';
// import partners03 from '../images/partners-03.png';

const imagePaths = [  
  require('../images/img-08.jpg'),
  require('../images/img-09.jpg'),
  require('../images/img-10.jpg'),
  require('../images/img-11.jpg'),
  require('../images/img-12.jpg'),
  require('../images/img-13.jpg'),
];

export default function About() {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col>
            <Fade cascade triggerOnce direction="left">
            <div className="about__header">
              <div className="about__header__content">
                <h4 className="text--lead text-white">Now’s the time — take advantage of our limited-time seller services offer!</h4>
                <p className='text--body text-center text-white mb-5'>
                  This Woodland Hills beauty knows how to bring the charm: cozy yet spacious, classic yet updated, peaceful yet perfect for entertaining.
                </p>
                <a className="btn btn--secondary" target="__blank" href="sms:+13106334350?body=Hi%2C%20I'm%20interested%20in%20the%20property%205207%20Sale%20Ave.%20Please%20contact%20me.">Schedule Your Free Consultation</a>
              </div>
            </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
              <Fade triggerOnce>
                <div className='headercontent'>
                  <div className="headercontent__content">
                    <h2 className="text--subtitle text-center text--white">Listing Details</h2>
                  </div>
                </div>
                <div className="about__content">
                  <ul className="boxes">
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaBed size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">Beds: 3</h4>
                      <p className='text--body boxes__content'>Baths: 2</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaRulerCombined size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">SqFt: 1,366</h4>
                      <p className='text--body boxes__content'>MLS#: 24-472029</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaCar size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">Parking Spaces: 2</h4>
                      <p className='text--body boxes__content'>Circular Driveway, Attached</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaDollarSign size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">Price: $1,060,000</h4>
                      <p className='text--body boxes__content'>Price/SqFt: $775.99</p>
                    </li>
                  </ul>
                </div>
              </Fade>
          </Col>
        </Row>
      </Container>
      <Gridimg 
          imagePaths = {imagePaths}
      />
      <Container>
        <Row>
          <Col>
            <Fade cascade triggerOnce direction="left">
            <div className="about__header">
              <div className="about__header__content">
                <h2 className="text--subtitle text-center text-uppercase text--white">Woodland Hills</h2>
                <p className='text--body text-center text-white mb-5'>
                  Built in 1956, this home is a testament to timeless California living, nestled south of Ventura Boulevard in a highly coveted and desirable area. It's a space where the nostalgia of a simpler era blends seamlessly with the comforts of today. Step inside, and you're greeted by sunlit rooms that exude warmth and character.
                </p>
              </div>
              <div className="about__content text-center">
                <a className="btn btn--secondary" target="__blank" href="sms:+13106334350?body=Hi%2C%20I'm%20interested%20in%20the%20property%205207%20Sale%20Ave.%20Please%20contact%20me.">Learn How We Can Sell Your Home Too</a>
              </div>
            </div>
            </Fade>
          </Col>
        </Row>
      </Container>


      {/* <Container>
        <Row>
          <Col>
            <Fade cascade triggerOnce direction="right">
              <div className="about__content">
                <ul className='about__partners'>
                  <li className='about__partners__item'>
                    <h4 className="text--subtitle text-center text-uppercase text--dark-secondary"><em>Nuestras<br />Marcas</em></h4>
                  </li>
                  <li className='about__partners__item'>
                    <img src={partners01} alt="MetaAds"/>
                  </li>
                  <li className='about__partners__item'>
                    <img src={partners02} alt="GoHighLevel"/>
                  </li>
                  <li className='about__partners__item'>
                    <img src={partners03} alt="Appointwise"/>
                  </li>
                </ul>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container> */}
      
    </section>
  )
}
