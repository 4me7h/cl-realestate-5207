import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gridimg from './Gridimg';
import { Fade } from 'react-awesome-reveal';
import { FaShieldAlt, FaHandshake, FaClock, FaRoad } from "react-icons/fa";

// import partners01 from '../images/partners-01.png';
// import partners02 from '../images/partners-02.png';
// import partners03 from '../images/partners-03.png';

const imagePaths = [  
  require('../images/img-05.jpg'),
  require('../images/img-14.jpg'),
  require('../images/img-02.jpg'),
  require('../images/img-06.jpg'),
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
                <h2 className="text--subtitle text-center text-uppercase text--white">Conoce más sobre Lobo Tours</h2>
                <p className='text--body text-center text-white'>
                  En Lobo Tours, llevamos más de 28 años conectando destinos y personas con seguridad, confianza y eficiencia. Somos tu mejor opción para viajes terrestres en autobús, Sprinter y Toyota, ofreciendo un servicio personalizado y comprometido con tu bienestar.
                </p>
              </div>
            </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Gridimg 
          imagePaths = {imagePaths}
      />
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
      <Container>
        <Row>
          <Col>
              <Fade triggerOnce>
                <div className='headercontent'>
                  <div className="headercontent__content">
                    <h3 className="text--subtitle text-center text--white">Nuestros Valores</h3>
                  </div>
                </div>
                <div className="about__content">
                  <ul className="boxes">
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaShieldAlt size={75}/>
                      </div>
                      <h4 className="text--lead boxes__title">Seguridad:</h4>
                      <p className='text--body boxes__content'>Tu bienestar es nuestra prioridad.</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaHandshake size={75}/>
                      </div>
                      <h4 className="text--lead boxes__title">Confianza:</h4>
                      <p className='text--body boxes__content'>Miles de clientes nos respaldan.</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaClock size={75}/>
                      </div>
                      <h4 className="text--lead boxes__title">Eficiencia:</h4>
                      <p className='text--body boxes__content'>Llegamos a tiempo, siempre.</p>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaRoad size={75}/>
                      </div>
                      <h4 className="text--lead boxes__title">Compromiso:</h4>
                      <p className='text--body boxes__content'>Contigo, desde el inicio hasta el final del viaje.</p>
                    </li>
                  </ul>
                </div>
                <div className="about__content text-center">
                  <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20de%20clase%20económica">Reserva Aquí</a>
                </div>
              </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
